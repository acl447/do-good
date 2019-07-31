import React from "react";
import "./login.css"
import { AuthConsumer } from "../authContext";

const Login = () => (
  <AuthConsumer>
    {({ initiateLogin }) => (
      <div>
      <button className="btn btn-sm btn-primary" onClick={initiateLogin}>
      <font size="+2">Login</font>
        
      </button>
      </div>
    )}
  </AuthConsumer>
);

export default Login;