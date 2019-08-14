import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./Grid";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "./Form";
import "./Detail.css"



class Detail extends Component {
  state = {
    post: {},
    author: "",
    message: ""


  };

  loadPost() {

    API.getPost(this.props.postId)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err));


  };

  componentDidMount() {

    console.log(this.props.postId);


    this.loadPost();


  };

  showComments() {

    if (this.state.post.comments) {

      return this.state.post.comments.map(function (comment, i) {

        return <Col size="md-6" key={i}>

          <br />
          <div className="comment_box">

            <h5 className="author">{comment.author}</h5>

            <p>{comment.message}</p>

          </div>
    

        </Col>

      })
    }

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.author && this.state.message) {

      let newComment = { author: this.state.author, message: this.state.message };

      console.log(newComment);

      this.state.post.comments.push(newComment);

      console.log("post title", this.state.post.title);

      console.log("name", this.state.post.name);

      console.log("text", this.state.post.text);

      console.log("link to image", this.state.post.imageLink);

      console.log("zipcode", this.state.post.zipcode);

      console.log("comments", this.state.post.comments);

      API.updatePost(this.props.postId, this.state.post.comments)
        .then(res => this.loadPost())
        .catch(err => console.log(err));

    }

  };

  showImage() {


    if (this.state.post.imageLink) {

      return (

        <img className="postImage" src={this.state.post.imageLink} alt="item needed or offered" />
      )
    }
  };





  render() {
    return (
      <Container fluid>


        <Row>
          <Col size="md-12">


            <div className="Detail_info mt-5">

              <div className="post_box">

                <div className="post_info">

                  <h1 className="post_title">
                    {this.state.post.title} by {this.state.post.name}
                  </h1>
                  {this.showImage()}
                  <br></br>
                  <h2 className="post_description">
                    {this.state.post.text}
                  </h2>


                  {/* <Link to="/home" className="back">← Back to Home</Link> */}
                </div>

              </div>


            </div>



          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>

              <p className="post_description">
                {/* {this.state.post.text} */}
              </p>



            </article>
          </Col>
        </Row>
        <Row className="mt-5">
          
          <Col size="md-4">
            <h2 className="add-comment mt-5">Add A Comment</h2>
            <form>
              <Input placeholder="Your name"
                onChange={this.handleInputChange}
                value={this.state.author}
                name="author"
              ></Input>
              <TextArea value={this.state.message}
                onChange={this.handleInputChange}
                name="message" placeholder="Message"></TextArea>
              <FormBtn disabled={!(this.state.author && this.state.message)} onClick={this.handleFormSubmit}>Submit</FormBtn>
            </form>
          </Col>
         

          <Col size="md-8">
            <h2 className="comments mt-5">Comments</h2>
            <div>
              {this.showComments()}
            </div>
          </Col>
        
        </Row>
        <Row>
         
          <Col size="md-12">
            <Link to="/home" className="float-right mr-5 mb-5 mt-5">← Back to Home</Link>
          </Col>
         
        </Row>
      </Container>
    );
  }
}

export default Detail;
