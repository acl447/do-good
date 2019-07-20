import React from 'react';
// import NavTabs from "../components/Navbar/NavTabs";
// import SideNav from '../components/SideNav/SideNav';
import "./signin.css";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../authContext";
import Login from "../components/Login";


const HomePage = () => (
  <AuthConsumer>
    {({ authenticated }) =>
      authenticated ? (
        <Redirect to="/inbox" />
      ) : (
      
        <div class="signin">
           <header>
          <div>
          <ul>
          <h1><a class="active" href="#signin">Do Good</a></h1>
          </ul>
        </div>
        </header>

          <div>
          <h1>Are You Ready to Do Good?</h1>
          <h2>Do Good is a community-based service that allows neighbors to give and receive goods and services without any cost or money exchange. Doing good to help each other out without expecting anything in return but gratitude.</h2>
          <h2>Please log in to begin!</h2>
          <Login />
        </div>
        </div>
      )
      
    }
  </AuthConsumer>
);

export default HomePage;