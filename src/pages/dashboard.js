import React from "react";
import { Redirect } from "react-router-dom";
import NavTabs from "../components/Navbar/NavTabs";
import { AuthConsumer } from "../authContext";
import Can from "../components/Can";
// import Logout from "../components/Logout";
import Profile from "../components/Profile";
import PostsList from "../components/PostsList.js";

const DashboardPage = () => (
  <AuthConsumer>
    {({ user }) => (
      <Can
        role={user.role}
        perform="dashboard-page:visit"
        yes={() => (
          <div>
            <NavTabs />
            <h1>Dashboard</h1>
            {/* <Logout /> */}
            <Profile />
            <PostsList />
          </div>
        )}
        no={() => <Redirect to="/" />}
      />
    )}
  </AuthConsumer>
);

export default DashboardPage;