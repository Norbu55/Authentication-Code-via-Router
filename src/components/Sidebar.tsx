import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const useAuth = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const user = useAuth();
  const location = useLocation();
  const navigation = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigation("/login");
  };

  return (
    <div className="sidebar">
      <div className="sidebar__items">
        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/tabs">Tabs</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/users">Users</Link>

            {location.pathname !== "/login" && (
              <button onClick={logout}>Logout</button>
            )}
          </>
        )}
        {!user && <Link to="/login">Login</Link>}
      </div>
    </div>
  );
}

export default Sidebar;
