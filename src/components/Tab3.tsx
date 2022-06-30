import React from "react";
import WithPermission from "./WithPermission";

function Tab3() {
  return (
    <div>
      <h1>Tab 3 demo</h1>
      <WithPermission roleRequired="ADMIN" message="Only Admin Can View This!">
        <h1>Welcome Admin! </h1>
        <button>Edit</button>
      </WithPermission>
    </div>
  );
}

export default Tab3;
