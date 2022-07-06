import React from "react";
import { useNavigate } from "react-router-dom";

function PermissionDenied() {
  const navigate = useNavigate();
  return (
    <div style={{ margin: "30px", lineHeight: "1.8rem" }}>
      <h2>Permission Denied</h2>
      <h2>Only Admin can Access it.</h2>
      <button
        style={{
          width: "120px",
          padding: "6px",
          borderRadius: "8px",
          border: "2px solid #365262",
          fontSize: "17px",
          marginTop: "10px",
        }}
        onClick={() => navigate("/tabs")}
      >
        Back
      </button>
    </div>
  );
}

export default PermissionDenied;
