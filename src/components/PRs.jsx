const PRs = () => {
  return (
    <div className="prs--main__container">
      <div className="selection--container">
        <h1 className="prs--header">PR`s</h1>
        <span className="choose--exercise__carusel">squat snatch</span>
        <input className="find--exercise" type="text" />
      </div>
      <div className="exercise--container">
        <h1 className="exercise--container__header">Personal Record`s</h1>
        <div className="carusel--container__exercise">
          <div className="exercise--wrapper">
            <p>Back squat</p>
            <p>85kg</p>
          </div>
          <div className="exercise--wrapper">
            <p>Thruster</p>
            <p>62,5kg</p>
          </div>
          <div className="exercise--wrapper">
            <p>Clean and Jerk</p>
            <p>62,5kg</p>
          </div>
          <div className="exercise--wrapper">
            <p>Benchmark Fran</p>
            <p>3:14 min</p>
          </div>
          <div className="exercise--wrapper">
            <p>Benchmark Cindy</p>
            <p>17 (12) reps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PRs;
