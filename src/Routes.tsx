import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import InnerContent from "./components/InnerContent";
import Tabs from "./components/Tabs";
import Settings from "./components/Settings";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";
import PermissionDenied from "./components/PermissionDenied";

import Users from "./components/Users";
import SingleUser from "./components/SingleUser";
import NewUser from "./components/NewUser";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<InnerContent />}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tabs" element={<Tabs />}>
            <Route path="/tabs" element={<Navigate replace to="tab1" />} />
            <Route path="tab1" element={<Tab1 />} />
            <Route
              path="tab2"
              element={<ProtectedRoutes roleRequired="USER" />}
            >
              <Route path="/tabs/tab2" element={<Tab2 />} />
            </Route>

            <Route path="tab3" element={<Tab3 />} />
          </Route>
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<SingleUser />} />
          <Route path="users/new" element={<NewUser />} />
        </Route>
      </Route>
      <Route path="login" element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/denied" element={<PermissionDenied />} />
    </Routes>
  );
}

export default MainRoutes;
