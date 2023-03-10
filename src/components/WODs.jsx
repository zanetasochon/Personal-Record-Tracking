import supabase from "../services/supabase";
import { useEffect, useState } from "react";

const WODs = () => {
  return (
    <div className="wods--main__container">
      <div className="selection--container">
        <h1 className="WODs--header">WORK OF THE DAY</h1>
        <button className="choose--wods__button">Choose your WOD </button>
      </div>
      <div className="wod--container">
        <div className="number--of__wod">Benchmark #1</div>
        <h1 className="wods--container__header">Cindy</h1>
        <div className="wod--card__container">
          <p className="work--of--the__day">
            AMRAP in 20 minutes : 5 Pull-Ups, 10 Push-Ups, 15 Air Squats
          </p>
          <p className="wod--description">
            How do you perform the “Cindy” workout? On a 20-minute clock,
            perform as many rounds and reps as possible (AMRAP) of the work in
            the order written. 1 round is equal to 5 Pull-Ups, 10 Push-Ups, and
            15 Air Squats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WODs;
