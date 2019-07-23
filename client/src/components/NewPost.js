
import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

import axios from "axios";
// import { stringify } from "querystring";

class NewPost extends Component {
  state={
    text: "",
    posts: [],
  }
  componentDidMount(){
    this.loadPosts()
  }
  loadPosts = () => {
    API.getPosts()
      .then(res => {
        this.setState({ posts: res.data });
    console.log(res.data);
  })
      .catch(err => console.log(err));
  };

  handleChange=(e) => {
    const{name,value} = e.target
    this.setState({[name]:value})
    
  };

  handleClick=() => {
    axios.post("/api/posts",{title: this.state.posts})

    .then(res => {
    console.log(res.data)})
      .catch(err => console.log(err));
  };

  render() {
    return (

      <Container fluid>
      <Row>
        {/* <Col size="md-6">
          <Jumbotron>
            <h1>Add A New Post</h1>
          </Jumbotron>
          <form>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <Input
              value={this.state.author}
              onChange={this.handleInputChange}
              name="author"
              placeholder="Author (required)"
            />
            <TextArea
              value={this.state.synopsis}
              onChange={this.handleInputChange}
              name="synopsis"
              placeholder="Synopsis (Optional)"
            />
            <FormBtn
              disabled={!(this.state.author && this.state.title)}
              onClick={this.handleFormSubmit}
            >
              Submit Book
            </FormBtn>
          </form>
        </Col> */}
        <Col size="md-12 sm-12">
          <Jumbotron>
            <h1>All Posts</h1>
          </Jumbotron>
          {this.state.posts.length ? (
            <List>
              {this.state.posts.map(post => (
                <ListItem key={post._id}>
                  <Link to={"/posts/" + post._id}>
                    <strong>
                      {post.text}
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
     

export default NewPost;

