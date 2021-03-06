
import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, FormBtn, TextArea } from "../Form";


// import axios from "axios";
// import { stringify } from "querystring";
import "./style.css";

class Posts extends Component {
  state = {
    title: "",
    name: "",
    text: "",
    zipcode: "",
    imageLink: "",
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  };

  loadPosts = () => {
    API.getPosts()
      .then(res => {
        this.setState({ posts: res.data, title: "", name: "", zipcode: "", text: "", imageLink: "" });
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
    if (this.state.title && this.state.name && this.state.text && this.state.zipcode) {
      API.savePost({
        title: this.state.title,
        name: this.state.name,
        imageLink: this.state.imageLink,
        text: this.state.text,
        zipcode: this.state.zipcode
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
        <h1 className="new_post mt-5">Add A New Post</h1>
          <form className="pb-5">
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Type of Item"
            />

<Input
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              placeholder="Your Name Here"
            />
            <Input
              value={this.state.zipcode}
              onChange={this.handleInputChange}
              name="zipcode"
              placeholder="Your Zipcode Here"
            />
            <Input
              value={this.state.imageLink}
              onChange={this.handleInputChange}
              name="imageLink"
              placeholder="Enter Link to Photo (optional)"
            />
            <TextArea
            value={this.state.text}
            onChange={this.handleInputChange}
            name="text"
            placeholder="Enter Description of Needed Item or Item to be Gifted" />
           
            <FormBtn
              disabled={!(this.state.title && this.state.name && this.state.text)}
              onClick={this.handleFormSubmit}
            >
              Submit
            </FormBtn>
          </form>
        </Col>
        <Col size="md-3"></Col>
        <Col size="md-5">
        
          {this.state.posts.length ? (
            <List>
              <h1 className="user_post mt-5">Posts</h1>
              {this.state.posts.slice(0).reverse().map(post => (
                <ListItem key={post._id}>
                  <Link to={"/posts/" + post._id}>
                    <strong>
                      {post.title} by {post.name}
                      <br/>
                      <br />
                      {post.zipcode}

                    </strong>
                  
                    
                  </Link>
                  
                  
                  {/* <DeleteBtn onClick={() => this.deletePost(post._id)} /> */}
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

