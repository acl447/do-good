import React from "react";

function Jumbotron({ children }) {
  return (
    <div
<<<<<<< HEAD
      style={{ height: 40, clear: "both", paddingTop: 120, textAlign: "center" }}
=======
      style={{ height: 500, clear: "both", paddingTop: 120, textAlign: "center" }}
>>>>>>> d8a30b0e6d26f373a92b94e95b2e068e8628bd40
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;