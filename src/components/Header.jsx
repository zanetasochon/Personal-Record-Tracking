import "primeicons/primeicons.css";
import "../scss/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faCalendarAlt,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import Sidebar from "./Sidebar";

const Header = () => {
  const [value, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleCalendarIconClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleVisibleSidebar = () => {
    console.log("weeee");
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="container--header">
      <div className="header--logo__container">
        <h1 className="header--logo">Personal Record Tracking</h1>
        <FontAwesomeIcon icon={faDumbbell} />
      </div>
      <div className="header--active__icons">
        <Link to="/calendar" style={{ color: "#fff", cursor: "pointer" }}>
          <FontAwesomeIcon
            icon={faCalendarAlt}
            onClick={handleCalendarIconClick}
          />
          {showCalendar && <Calendar onChange={onChange} value={value} />}
        </Link>
        <FontAwesomeIcon
          icon={faHouse}
          onClick={handleVisibleSidebar}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Header;
