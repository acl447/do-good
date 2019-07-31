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
        <Redirect to="/home" />
      ) : (
      
        <div class="signin">
           <header>
             
          <div>
          <ul>
          <h1 className="title"><font color="white">Do Good</font></h1>
          </ul>
          
        </div>
        </header>

          <div>
          <br></br>
          
          <h2 className="signin_description">Do Good is a community-based service that allows neighbors to 
            give and receive goods and services without any cost or money exchange. Doing good to help each other out without expecting anything in return but gratitude.
          <br></br>Please log in to begin!</h2>
          

          <Login />
        </div>
        </div>
      )
      
    }
  </AuthConsumer>
);

export default HomePage;