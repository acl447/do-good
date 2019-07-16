import React from 'react';

import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../authContext";
import Login from "../components/Login";

const HomePage = () => (
  <AuthConsumer>
    {({ authenticated }) =>
      authenticated ? (
        <Redirect to="/inbox" />
      ) : (
        <div>
          <h1>Are You Ready to Do Good?</h1>
          <h2>Do Good is ________ .</h2>
          <h2>Please log in to begin!</h2>
          <Login />
        </div>
      )
    }
  </AuthConsumer>
);

export default HomePage;