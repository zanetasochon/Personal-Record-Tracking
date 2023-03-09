import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div>
      <Outlet />
      <div className="components--wrapper">
        <Header />
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
