import './App.css';
import React, { Component } from 'react';
import Books from './components/Books.js';
import AddBook from './components/AddBook.js';

class App extends Component{
  state = {
    books: []
  }

  addBook = (book) => {
    book.id = Math.random();
    let books = [...this.state.books, book]
    this.setState({
      books: books
    })
  }

  render(){
    return(
      <div className="App">
        <h1>Library!</h1>
        <Books books={this.state.books}/>
        <AddBook addBook={this.addBook}/>
      </div>
    );
  }
};

export default App;
