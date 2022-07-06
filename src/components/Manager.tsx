import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Manager() {
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
            {/* <Link to="/settings">Settings</Link> */}
            <Link to="/users">Users</Link>

            {location.pathname !== "/login" && (
              <button
                onClick={logout}
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "17px",
                }}
              >
                Logout
              </button>
            )}
          </>
        )}
        {/* {!user && <Link to="/login">Admin</Link>} */}
        {/* {!user && <Link to="/login">Manager</Link>} */}
        {/* {!user && <Link to="/login">Users</Link>} */}
      </div>
    </div>
  );
}

export default Manager;
