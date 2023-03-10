import React from "react";
import { Calendar } from "react-calendar";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.scss";

//Views
import Dashboard from "./views/dashboard";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import calendar from "./views/calendar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
