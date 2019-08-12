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
      
        <div className="signin">
           <header>
             
          <div>
          <ul>
          <h1 className="title"><font color="white">Do Good</font></h1>
          </ul>
          
        </div>
        </header>

          <div>
          <br></br>
          
          <div className="signin_description"><h3 className="pb-3">Do Good is a community-based service that allows neighbors to 
            give and receive goods and services without any cost or money exchange. Doing good to help each other out without expecting anything in return but gratitude.
          <br></br>Please log in to begin!</h3>
          
          
           
          <Login />
         
        </div>
        </div>
        </div>
      )
      
    }
  </AuthConsumer>
);

export default HomePage;