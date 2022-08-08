import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminBar from "../components/AdminBar";
import Sidebar from "../components/Sidebar";
import { AdminWrapper, AdminMain } from "../styles/SharedLayoutAdminStyles";

const SharedLayoutAdmin = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const openSidebar = () => {
    setToggleSidebar(true);
  };

  const closeSidebar = () => {
    setToggleSidebar(false);
  };

  return (
    <AdminWrapper>
      <Sidebar open={toggleSidebar} closeSidebar={closeSidebar} />
      <AdminBar openSidebar={openSidebar} />
      <AdminMain>
        <Outlet />
      </AdminMain>
    </AdminWrapper>
  );
};

export default SharedLayoutAdmin;
