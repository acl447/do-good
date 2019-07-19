import React from "react";

import {AuthConsumer} from "../authContext";

const Profile = () => (
  <AuthConsumer>
    {({user}) => (
      <div>
        <ul>
          <li>ID: {user.id}</li>
          <li>My Email: {user.email}</li>
        </ul>
      </div>
    )}
  </AuthConsumer>
);

export default Profile;