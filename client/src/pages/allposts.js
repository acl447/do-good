import React from "react";
import { Redirect } from "react-router-dom";
import NavTabs from "../components/Navbar/NavTabs";
import { AuthConsumer } from "../authContext";
import Can from "../components/Can";
// import Logout from "../components/Logout";
// import PostsList from "../components/PostsList.js";
import { List, ListItem } from "../components/List";

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
            {/* <PostsList /> */}
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/posts/" + post._id}>
                      <strong>
                        {post.text} by {book.author}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            
          </div>
        )}
        no={() => <Redirect to="/" />}
      />
    )}
  </AuthConsumer>
);

export default AllPostsPage;