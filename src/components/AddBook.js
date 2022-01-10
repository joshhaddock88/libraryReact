import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class AddBook extends Component {
    state = {
        title: null,
        author: null,
        pages: null,
        haveRead: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.type]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBook(this.state);
        console.log("You pressed Submit");
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Enter title"/>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="author" placeholder="Enter author"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Pages</Form.Label>
                        <Form.Control type="pages" placeholder="Enter number of pages"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Read</Form.Label>
                        <Form.Control type="haveRead" placeholder="Have you read this?"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </div>
        )
    }
}

export default AddBook;