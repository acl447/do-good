import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "./Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./Grid";
import { List, ListItem } from "./List";
import { Input, FormBtn } from "../components/Form";

// import axios from "axios";
// import { stringify } from "querystring";

class Comments extends Component {
  state = {
    text: "",
    comments: [],
  };

  componentDidMount(){
    this.loadComments();
  };

  loadComments = () => {
    API.getComments()
      .then(res => {
        this.setState({ comments: res.data, text: "" });
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
      [name]:value
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
    if (this.state.text) {
      API.saveComment({
        text: this.state.text
      })
        .then(res => this.loadComments())
        .catch(err => console.log(err));
        
    }
   
  };

  render() {
    return (

      <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Add A New Comment</h1>
          </Jumbotron>
          <form>
            <Input
              value={this.state.text}
              onChange={this.handleInputChange}
              name="text"
              placeholder="Enter new comment"
            />
           
            <FormBtn
              disabled={!(this.state.text)}
              onClick={this.handleFormSubmit}
            >
              Submit Comment
            </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Comments</h1>
          </Jumbotron>
          {this.state.comments.length ? (
            <List>
              {this.state.comments.map(comment => (
                <ListItem key={comment._id}>
                  <Link to={"/comments/" + comment._id}>
                    <strong>
                      {comment.text}
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
     

export default Comments;

