import React from "react";
import WithPermission from "./WithPermission";

function Tab3() {
  return (
    <div>
      <h1>Tab 3 demo</h1>
      <WithPermission roleRequired="ADMIN" message="Only Admin Can View This!">
        <h1>Welcome Admin! </h1>
        <button
          style={{
            width: "120px",
            padding: "6px",
            borderRadius: "8px",
            border: "2px solid #365262",
            fontSize: "17px",
            marginTop: "10px",
          }}
        >
          Edit
        </button>
      </WithPermission>
    </div>
  );
}

export default Tab3;
