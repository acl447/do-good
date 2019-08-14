import React from "react";
import "./Profile.css"; 
import {AuthConsumer} from "../../authContext";
import { Row } from "../Grid/";

const Profile = () => (
  <AuthConsumer>
    {({user}) => (

        <div className="profile_info">
        <ul>
          <img className="user-img img-responsive mx-auto d-block" src={user.picture} alt="user profile img"/>
          <Row>
          <li className="d-block mx-auto">My Name: {user.name}</li>
          <li className="d-block mx-auto">ID: {user.id}</li>
          </Row>
          <Row>
          <li className="d-block mx-auto">My Username: {user.nickname}</li>
          <li className="d-block mx-auto">My Email: {user.email}</li>
          </Row>
        </ul>
      </div>
    )}
  </AuthConsumer>
);

export default Profile;