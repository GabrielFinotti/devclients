import { Outlet } from "react-router-dom";

import "./index.scss";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSiderbar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div id="layout">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSiderbar}></Sidebar>
      <div id="mainScreen">
        <Header isOpen={isSidebarOpen} toggleSidebar={toggleSiderbar}></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
