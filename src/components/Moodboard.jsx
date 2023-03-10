import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import supabase from "../services/supabase";
import { useEffect, useState } from "react";

const Moodboard = () => {
  return (
    <div className="moodboard--main__container">
      <div className="selection--container">
        <h1 className="moodboard--header">Moodboard</h1>
        <div className="moodboard--question">How was your training? </div>
        <div className="moodboard--icons">
          <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faSquarePlus} />
          <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faPenToSquare} />
          <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faTrashCan} />
        </div>
      </div>
      <div className="wod--container">
        <div className="header--of__journal">Journal</div>
        <p className="journal--entry">
          Dear diary, todays trainig was great. I finished training first and I
          feel fantastic. Last round was tough, but I have a new personal
          record!
        </p>
        <p className="journal--entry">
          I am exhausted and frustrated. I didn`t training on time. #F*ck.
        </p>
      </div>
    </div>
  );
};

export default Moodboard;
