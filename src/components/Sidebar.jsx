import "../scss/sidebar.scss";
import "primeicons/primeicons.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRunning,
  faDumbbell,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";
import ReactToPdf from "react-to-pdf";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { TumblrShareButton, TumblrIcon } from "react-share";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(null);
  const componentRef = useRef(null);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    setIsLogged(Boolean(userData));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setIsLogged(false);
  };

  useEffect(() => {
    if (isLogged === false) {
      navigate("signin");
    }
  }, [isLogged]);
  return (
    <div className="sidebar--container" ref={componentRef}>
      <h1 className="sidebar--header">HOME</h1>
      <div className="icons--sidebar--wrapper__main">
        <FontAwesomeIcon icon={faRunning} />
        <FontAwesomeIcon icon={faDumbbell} />
      </div>
      <div className="icons--sidebar--wrapper__second">
        <TumblrShareButton
          url={"https://www.example.com"}
          quote={"My best Personal Record!"}
          hashtag="#BestPersonalRecord"
        >
          <TumblrIcon size={52} round />
        </TumblrShareButton>
        <TwitterShareButton
          url={"https://www.example.com"}
          quote={"My best Personal Record!"}
          hashtag="#BestPersonalRecord"
        >
          <TwitterIcon size={52} round />
        </TwitterShareButton>
        <FacebookShareButton
          url={"https://www.example.com"}
          quote={"My best Personal Record"}
          hashtag="#BestPersonalRecord"
        >
          <FacebookIcon size={52} round />
        </FacebookShareButton>
      </div>
      <div className="footer--icons">
        <ReactToPdf targetRef={componentRef} filename="sidebar.pdf">
          {({ toPdf }) => (
            <FontAwesomeIcon
              className="print--icon"
              icon={faPrint}
              onClick={toPdf}
            />
          )}
        </ReactToPdf>
        <div className="logout--wrapper">
          <button onClick={handleLogout} className="logout--button">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
