
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
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  };

  loadPosts = () => {
    API.getPosts()
      .then(res => {
        this.setState({ posts: res.data, title: "", name: "", zipcode: "", text: "" });
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
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Enter post title"
              />
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Enter your name"
              />
              <Input
                value={this.state.zipcode}
                onChange={this.handleInputChange}
                name="zipcode"
                placeholder="Enter your zipcode"
              />
              <TextArea
                value={this.state.text}
                onChange={this.handleInputChange}
                name="text"
                placeholder="Enter text of post" />

              <FormBtn
                disabled={!(this.state.title && this.state.name && this.state.zipcode && this.state.text)}
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
                        {post.title} by {post.name} 
                        <br>
                        </br>
                        Zipcode {post.zipcode}

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

