import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  let user: any;

  const _user = localStorage.getItem("user");
  if (_user) {
    user = JSON.parse(_user);
  }

  if (user) {
    return {
      auth: true,
      role: user.role,
    };
  } else {
    return {
      auth: false,
      role: null,
    };
  }
};

type ProtectedRouteType = {
  roleRequired?: "ADMIN" | "USER";
};

function ProtectedRoutes(props: ProtectedRouteType) {
  const { auth, role } = useAuth();

  if (props.roleRequired) {
    return auth ? (
      props.roleRequired === role ? (
        <Outlet />
      ) : (
        <Navigate to="/denied" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } else {
    return auth ? <Outlet /> : <Navigate to="/login" />;
  }
}

export default ProtectedRoutes;
