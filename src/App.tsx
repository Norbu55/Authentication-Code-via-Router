import React from "react";
import MainRoutes from "./Routes";
import Sidebar from "./components/Sidebar";
import "./styles.css";

function App() {
  return (
    <div className="app">
      {/* --- SideBar--- */}

      <Sidebar />

      {/* ---Inner container--- */}

      <MainRoutes />
    </div>
  );
}

export default App;
