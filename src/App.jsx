import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

//Views
import Dashboard from "../views/dashboard";
import Signin from "../views/signin";
import Signup from "../views/Signup";

//Components
import Sidebar from "../components/Sidebar";
import WODs from "../components/WODs";
import PRs from "../components/PRs";
import Moodboard from "../components/Moodboard";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/WODs" />
          <Route path="/PRs" />
          <Route path="/moodboard" />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
