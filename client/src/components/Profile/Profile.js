import React from "react";
import "./Profile.css";
import {AuthConsumer} from "../../authContext";

const Profile = () => (
  <AuthConsumer>
    {({user}) => (

        <div className="profile_info">
        <ul>
          <img src={user.picture} alt="user profile img"/>
          <li>ID: {user.id}</li>
          <br></br>
          <li>My Email: {user.email}</li>
        </ul>
      </div>
    )}
  </AuthConsumer>
);

export default Profile;