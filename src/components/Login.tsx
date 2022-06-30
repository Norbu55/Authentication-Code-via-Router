import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("user", JSON.stringify({ role: "ADMIN" }));
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <h1>Welcome to Login Page!</h1>
      <h2>Please login to continue</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
