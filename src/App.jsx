import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.scss";

//Views
import Dashboard from "./views/dashboard";
import Signin from "./views/Signin";
import Signup from "./views/Signup";

//Components
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
