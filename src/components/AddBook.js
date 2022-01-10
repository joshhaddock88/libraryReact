import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class AddBook extends Component {
    state = {
        title: null,
        author: null,
        pages: null,
        haveRead: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
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
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" onChange={this.handleChange}/>
                    <label htmlFor="pages">Pages:</label>
                    <input type="text" id="pages" onChange={this.handleChange}/>
                    <label htmlFor="haveRead">Have you read it?:</label>
                    <input type="text" id="haveRead" onChange={this.handleChange}/>
                    <Button>Submit</Button>
                </form>
            </div>
        )
    }
}

export default AddBook;