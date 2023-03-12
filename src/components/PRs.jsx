import supabase from "../services/supabase";
import { useEffect, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { Scrollbars } from "react-custom-scrollbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const PRs = () => {
  const [allExercises, setAllExercises] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [value, setValue] = useState("");
  const [searchExercisesNames, setSearchExercisesNames] = useState([]);
  const [exercisesList, setExercisesList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newExercise, setNewExercise] = useState({});

  const exercisesNames = allExercises?.map(
    (singleExercise) => singleExercise.exercise_name
  );

  const search = (event) => {
    setSearchExercisesNames(
      event.query
        ? exercisesNames.filter((item) =>
            item.toLowerCase().includes(event.query.toLowerCase())
          )
        : exercisesNames
    );
  };

  const addExerciseToList = async (selectedExercise) => {
    const { data, error } = await supabase
      .from("exercise")
      .select()
      .eq("exercise_name", selectedExercise);
    if (error) {
      console.log("Could not fetch the exercise");
    }
    if (data) {
      setExercisesList([...exercisesList, data[0]]);
    }
  };

  const addNewExercise = async () => {
    try {
      const { data, error } = await supabase
        .from("exercise")
        .insert([newExercise]);
      if (error) {
        console.log("Could not insert new exercise:", error.message);
        return;
      }
      if (data) {
        setExercisesList([...exercisesList, data[0]]);
      }
      setNewExercise({
        exercise_name: "",
        personal_record: "",
      });
      setShowForm(false);
    } catch (error) {
      console.log("Could not insert new exercise:", error.message);
    }
  };

  const handleNewExerciseChange = (event) => {
    setNewExercise({
      ...newExercise,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmitNewExercise = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase
        .from("exercise")
        .insert([{ ...newExercise }]);
      if (error) {
        console.log("Could not insert new exercise:", error.message);
        return;
      }
      if (data) {
        setExercisesList([...exercisesList, data[0]]);
      }
      setNewExercise({
        exercise_name: "",
        personal_record: "",
      });
      setShowForm(false);
    } catch (error) {
      console.log("Could not insert new exercise:", error.message);
    }
  };
  console.log("allExercises", allExercises);
  useEffect(() => {
    const fetchExercise = async () => {
      const { data, error } = await supabase.from("exercise").select();

      if (error) {
        setFetchError("Could not fetch the exercise");
        setAllExercises(null);
        console.log("error");
      }
      if (data) {
        setAllExercises(data);
        setFetchError(null);
        console.log("data", data);
      }
    };

    fetchExercise();
  }, []);

  const removeExerciseFromList = (id) => {
    const updatedList = exercisesList.filter((exercise) => exercise.id !== id);
    setExercisesList(updatedList);
  };
  return (
    <div className="prs--main__container">
      <div className="selection--container">
        <h1 className="prs--header">PR`s</h1>
        <div className="card flex justify-content-center">
          <AutoComplete
            value={value}
            suggestions={searchExercisesNames}
            completeMethod={search}
            onChange={(e) => setValue(e.value)}
            onSelect={(e) => addExerciseToList(e.value)}
            dropdown
          />

          {fetchError && <p>{fetchError}</p>}
        </div>
      </div>
      <div className="exercise--container">
        <h1 className="exercise--container__header">Personal Record`s</h1>
        <FontAwesomeIcon
          className="icon--add--pr__form"
          style={{ cursor: "pointer" }}
          icon={faSquarePlus}
          onClick={() => setShowForm(true)}
        />
        <div className="carusel--container__exercise">
          <Scrollbars style={{ width: "100%", height: "100%" }}>
            {showForm && (
              <form id="exercise-form" onSubmit={handleSubmitNewExercise}>
                <label htmlFor="exercise_name">Exercise name :</label>
                <input
                  type="text"
                  name="exercise_name"
                  value={newExercise.exercise_name || ""}
                  onChange={handleNewExerciseChange}
                  required
                />
                <label htmlFor="personal_record">Personal record :</label>
                <input
                  type="text"
                  name="personal_record"
                  value={newExercise.personal_record || ""}
                  onChange={handleNewExerciseChange}
                  required
                />
                <button
                  className="add--pr__button"
                  form="exercise-form"
                  type="submit"
                >
                  Add new personal record
                </button>
              </form>
            )}

            {exercisesList.map((exercise) => (
              <div key={exercise.id} className="exercise--wrapper">
                <div className="PRs--icons">
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    icon={faPenToSquare}
                  />
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    icon={faTrashCan}
                    onClick={() => removeExerciseFromList(exercise.id)}
                  />
                </div>
                <p style={{ paddingTop: "10px" }}>{exercise.exercise_name}</p>
                <p>{exercise.personal_record}</p>
              </div>
            ))}
          </Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default PRs;
