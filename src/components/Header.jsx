import "primeicons/primeicons.css";
import "../scss/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faCalendarAlt,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="container--header">
      <div className="header--logo">
        <h1>Personal Record Tracking</h1>
        <FontAwesomeIcon icon={faDumbbell} />
      </div>
      <div className="header--active__icons">
        <FontAwesomeIcon icon={faCalendarAlt} />
        <FontAwesomeIcon icon={faHouse} />
      </div>
    </div>
  );
};

export default Header;
