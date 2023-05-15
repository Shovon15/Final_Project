import React, { useContext } from "react";
import { DashboardContext } from "../../../Context/DashboardContext";
import Sidebar from "../../../Pages/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Nav from "../../../Pages/Shared/Nav/Nav";
import Footer from "../../../Pages/Shared/Footer/Footer";

const DashboardLayout = () => {
  const { openSidebar } = useContext(DashboardContext);
  // console.log(openSidebar);
  return (
    <>
      <Nav />
      <div className="flex">
        <div
          className={`${
            openSidebar ? "w-[100px] md:w-[365px]" : "w-[100px] md:w-[85px]"
          } duration-500`}
        >
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="min-h-screen pl-2 md:pl-5">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
