import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <SideBar />

      <div className="col-span-10">
        <Navbar />
        <Outlet />
        {/* <Header data={data} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
