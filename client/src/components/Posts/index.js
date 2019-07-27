
import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, FormBtn } from "../Form";
// import Comments from "./Comments";

// import axios from "axios";
// import { stringify } from "querystring";
import "./style.css";

class Posts extends Component {
  state = {
    text: "",
    name: "",
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  };

  loadPosts = () => {
    API.getPosts()
      .then(res => {
        this.setState({ posts: res.data, text: "", name: "" });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  // deletePost = id => {
  //   API.deletePost(id)
  //     .then(res => this.loadPosts())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleClick=() => {
  //   axios.post("/api/posts",{title: this.state.posts})

  //   .then(res => {
  //   console.log(res.data)})
  //     .catch(err => console.log(err));
  // };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.text && this.state.name) {
      API.savePost({
        text: this.state.text,
        name: this.state.name
      })
        .then(res => this.loadPosts())
        .catch(err => console.log(err));

    }

  };



  render() {
    return (

      <Container fluid>
        <Row>
          <Col size="md-4">
            <form>
              <Input
                value={this.state.text}
                onChange={this.handleInputChange}
                name="text"
                placeholder="Enter new post"
              />
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Enter your name"
              />

              <FormBtn
                disabled={!(this.state.text && this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit Post
            </FormBtn>
            </form>
          </Col>
          <Col size="md-8">

            {this.state.posts.length ? (
              <List>
                {this.state.posts.map(post => (
                  <ListItem key={post._id}>
                    <Link to={"/posts/" + post._id}>
                      <strong>
                        {post.text} by {post.name}

                      </strong>


                    </Link>


                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>

        </Row>
      </Container>


    );

  }

}


export default Posts;

