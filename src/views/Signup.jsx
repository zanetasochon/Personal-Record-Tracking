import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

const Signup = () => {
  return (
    <div className="signup--container">
      <div className="signup--container__text">
        <h1 className="app--title">
          PERSONAL RECORD TRACKING
          <i
            className="pi pi-bolt"
            style={{ fontSize: "15px", marginLeft: "5px" }}
          ></i>
        </h1>
        <h2 className="header--title">CROSSFIT IN SIX WORDS?</h2>
        <p className="quote">
          "Constantly varied functional movement at high intensity" — It says it
          all, but it's so much more.
        </p>
        <p className="article">
          No matter what you’re looking for from your workouts — feeling better,
          looking better, sleeping better, being stronger — intensity is the
          most effective way to get you there. In CrossFit, we focus first on
          moving well with consistency, and then we work on increasing
          intensity. But a workout that’s intense for one person may not be for
          another. Intensity is relative, which means the goal is to work hard
          within the limits of your own physical and psychological capacity,
          because that’s where the results are. If you’re working hard, chances
          are you’re getting fitter.
        </p>
        <p className="footer--slogan">
          Crossfit is the best way to be your best!
        </p>
      </div>
      <div className="signup--container__form">
        <div className="background--form">
          <div className="wrapper">
            <span
              className="pi pi-user"
              style={{ color: "#fff", fontSize: "40px", paddingTop: "35px" }}
            />
            <h1 className="header--signup">Signup</h1>
          </div>
          <form className="signup--form">
            <div className="input--style">
              <span className="pi pi-envelope" />
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="email"
              />
            </div>
            <div className="input--style">
              <span className="pi pi-lock" />
              <input
                type="password"
                className="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button
              aria-label="Already have an account?"
              className="account--question"
            >
              <span className="account--question">
                Already have an account?
              </span>
            </button>
            <button label="Signup" severity="help" className="signup--button">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import "../scss/signup.scss";
