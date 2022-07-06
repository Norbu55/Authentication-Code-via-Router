import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const Login = () => {
    localStorage.setItem("user", JSON.stringify({ role: "ADMIN" }));
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <h1>Welcome to Login Page!</h1>
      <h2>Please login to continue</h2>
      <button
        onClick={Login}
        style={{
          width: "120px",
          padding: "6px",
          borderRadius: "8px",
          border: "2px solid #365262",
          fontSize: "17px",
          marginTop: "10px",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
