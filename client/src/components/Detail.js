import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./Grid";
import API from "../utils/API";
import "./Detail.css"



class Detail extends Component {
  state = {
    post: {},
    // comment: {},
    
  };





  componentDidMount() {

    console.log(this.props.postId);

    // console.log(this.props.commentId);

    API.getPost(this.props.postId)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err));



    // API.getComment(this.props.commentId)
    //   .then(res => this.setState({ comment: res.data}))
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        
 
        <Row>
          <Col size="md-12">
            

            <div className="Detail_info">

              <div className="post_box">
             
              <div className="post_info">

                <h1 className="post_title">
                {this.state.post.title} by {this.state.post.name}
                </h1>
                <br></br>
                <h2 className="post_decription">
                {this.state.post.text}
                </h2> 

                <div className="btn-group float-left">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Reply
               </button>
                <div className="dropdown-menu">
                  <Link to="#" className="dropdown-item">Copy and Paste into your Email:</Link>

                  <Link to="#" className="dropdown-item">345khksfghk425kjh@dogood.org</Link>
                </div>
              </div>
              <Link to="/home" className="back">← Back to Home</Link>
              </div>
              
              {/* <p>Comments:</p> */}
              {/* <p>{this.state.comment.text}</p> */}

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
        <Row>
          <Col size="md-2">
            <Link to="/home">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
