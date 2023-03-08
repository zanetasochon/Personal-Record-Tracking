import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div>
      {/* <h1>Personal Record Tracking</h1> */}
      <Outlet />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
