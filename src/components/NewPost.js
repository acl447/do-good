import React from "react";

import { Col, Row, Container} from "./Grid/index";

import { Input, TextArea, FormBtn } from "./Form/index";

function NewPost(props) {

    handleInputChange() {



    };
 

    return (
        
        <Container fluid>
       <Row>
         <Col size="md-6">
           
           <form>
             <Input
               value={props.user.name}
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
           </form>
         </Col>
         <Col size="md-6 sm-12">
           <Jumbotron>
             <h1>Books On My List</h1>
           </Jumbotron>
           {this.state.books.length ? (
             <List>
               {this.state.books.map(book => (
                 <ListItem key={book._id}>
                   <Link to={"/books/" + book._id}>
                     <strong>
                       {book.title} by {book.author}
                     </strong>
                   </Link>
                   <DeleteBtn onClick={() => this.deleteBook(book._id)} />
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
   
   export default NewPost;

