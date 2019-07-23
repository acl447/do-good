import React from "react";

import { Col, Row, Container } from "./Grid/index";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "./Form/index";
import axios from "axios";
import { stringify } from "querystring";

class NewPost extends React.Component {
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
          <Col size="md-12">
            <Input
            name="text"
            onChange={this.handleChange}
            value={this.state.post}
            />

            <button
            onClick={this.handleClick}
            >Text submit</button>


            {/* <form>
              <Input
                value=
                onChange={this.handleInputChange}
                name="username"
                placeholder="Enter Username"
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
            </form> */}
          </Col>
        </Row>
      </Container>

    )
  }
}

// function NewPost(props) {

//     handleInputChange() {



//     };


//     return (

//         <Container fluid>
//        <Row>
//          <Col size="md-6">

//            <form>
//              <Input
//                value={props.user.name}
//                onChange={this.handleInputChange}
//                name="username"
//                placeholder="Enter Username"
//              />
//              <Input
//                value={this.state.author}
//                onChange={this.handleInputChange}
//                name="author"
//                placeholder="Author (required)"
//              />
//              <TextArea
//                value={this.state.synopsis}
//                onChange={this.handleInputChange}
//                name="synopsis"
//                placeholder="Synopsis (Optional)"
//              />
//              <FormBtn
//                disabled={!(this.state.author && this.state.title)}
//                onClick={this.handleFormSubmit}
//              >
//                Submit Book
//              </FormBtn>
//            </form>
//          </Col>
//          <Col size="md-6 sm-12">
//            <Jumbotron>
//              <h1>Books On My List</h1>
//            </Jumbotron>
//            {this.state.books.length ? (
//              <List>
//                {this.state.books.map(book => (
//                  <ListItem key={book._id}>
//                    <Link to={"/books/" + book._id}>
//                      <strong>
//                        {book.title} by {book.author}
//                      </strong>
//                    </Link>
//                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//                  </ListItem>
//                ))}
//              </List>
//            ) : (
//              <h3>No Results to Display</h3>
//            )}
//          </Col>
//        </Row>
//      </Container>



//     );
//    }

export default NewPost;

