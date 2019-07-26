import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";




class Detail extends Component {
  state = {
    post: {}
  };
  
  componentDidMount() {

    console.log(this.props.postId);

    API.getPost(this.props.postId)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
       
       <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.post.text}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/home">← Back to All Posts</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
