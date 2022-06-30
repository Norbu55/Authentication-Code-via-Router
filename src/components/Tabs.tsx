import React from "react";
import { Outlet } from "react-router-dom";
import TabNav from "./TabNav";
function Tabs() {
  return (
    <div>
      <h1> Welcome to Tabs page</h1>
      <TabNav />
      <Outlet />
    </div>
  );
}

export default Tabs;
