import React from "react";
import { Redirect } from "react-router-dom";
import NavTabs from "../components/Navbar/NavTabs";
import { AuthConsumer } from "../authContext";
import Can from "../components/Can";
// import Logout from "../components/Logout";
import PostsList from "../components/PostsList.js";
// import { List, ListItem } from "../components/List";

const AllPostsPage = () => (
  <AuthConsumer>
    {({ user }) => (
      <Can
        role={user.role}
        perform="allposts-page:visit"
        yes={() => (
          <div>
            <NavTabs />
            <h1>All Posts</h1>
            {/* <Logout /> */}
            <PostsList />
           
            
          </div>
        )}
        no={() => <Redirect to="/" />}
      />
    )}
  </AuthConsumer>
);

export default AllPostsPage;