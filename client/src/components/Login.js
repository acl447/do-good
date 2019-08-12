import React from "react";
import { AuthConsumer } from "../authContext";

const Login = () => (
  <AuthConsumer>
    {({ initiateLogin }) => (
      <div>
      <button className="btn btn-sm btn-primary d-block mx-auto my-auto" onClick={initiateLogin}>
      <font size="+1"><strong>Login</strong></font>
        
      </button>
      </div>
    )}
  </AuthConsumer>
);

export default Login;