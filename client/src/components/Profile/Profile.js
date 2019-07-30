import React from "react";
import "./Profile.css"; 
import {AuthConsumer} from "../../authContext";
import { Row } from "../Grid/";

const Profile = () => (
  <AuthConsumer>
    {({user}) => (

        <div className="profile_info">
        <ul>
          <img className="user-img" src={user.picture} alt="user profile img"/>
          <Row>
          <li>My Name: {user.name}</li>
          <li>ID: {user.id}</li>
          </Row>
          <Row>
          <li>My Username: {user.nickname}</li>
          <li>My Email: {user.email}</li>
          </Row>
        </ul>
      </div>
    )}
  </AuthConsumer>
);

export default Profile;