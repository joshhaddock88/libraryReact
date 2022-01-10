import './App.css';
import React, { Component } from 'react';
import Books from './components/Books.js';
import AddBooks from './components/AddBooks.js';

class App extends Component{
  state = {
    books: [
      {title: 'Moby Dick', author: 'Herman Melville', pages: 850, haveRead: 'Yes'}
    ]
  }

  addBook = (book) => {
    let books = [...this.state.books, book]
    this.setState({
      books: books
    })
  }

  render(){
    return(
      <div className="App">
        <h1>Library!</h1>
        <Books
          books={this.state.books}
        />
        <AddBooks addBook={this.addBook}/>
      </div>
    );
  }
};

export default App;
