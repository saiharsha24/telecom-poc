import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from 'react-router-dom';
const Management = () => {
  return (
    <>
      <Sidebar />
      <div style={{marginLeft:250}}><Outlet /></div>
    </>
  )
};

export default Management;
