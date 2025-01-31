import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router";
import ScrollToTop from "./ScrollToTop";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
      <ScrollToTop />
    </div>
  );
};

export default Body;
