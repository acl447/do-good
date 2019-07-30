import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 40, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;