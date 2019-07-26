import React from "react";
import { Redirect } from "react-router-dom";
import NavTabs from "../components/Navbar/NavTabs";
import { AuthConsumer } from "../authContext";
import Can from "../components/Can";
// import Logout from "../components/Logout";
// import PostsList from "../components/PostsList.js";
// import { List, ListItem } from "../components/List";
import Posts from "../components/Posts";
import "./allposts.css";

const AllPostsPage = () => (
  <AuthConsumer>
    
    {({ user }) => (
      <Can
        role={user.role}
        perform="home-page:visit"
        yes={() => (
          
          <div>
            <div class="allposts">

            </div>
            <NavTabs />
          
            {/* <Logout /> */}
            {/* <PostsList /> */}
           
            <Posts />
          </div>
        )}
        no={() => <Redirect to="/" />}
      />
    )}
  </AuthConsumer>
);

export default AllPostsPage;