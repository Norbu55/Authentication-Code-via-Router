import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

function PublicRoutes(props: any) {
  const auth = useAuth();

  return auth ? <Navigate to="/login" /> : <Outlet />;
}

export default PublicRoutes;
