import React from 'react'
import HomePage from "./HomePage"
import Book from "./BooksFolder/Book"
import * as BooksAPI from "./BooksAPI"

export default class SearchBooks extends React.Component {
  state = {
    searchResults : [],
    value: ''
  }
  resetSearch = () => {
    this.setState({ searchResults: [] });
  }

  
  handleChange = event => {
    const value = event.target.value;
    this.setState({ value: value });

    if (value.length > 0) {
      BooksAPI.search(value).then(books => {
        if (books.error) {
          this.setState({ searchResults: [] });
        } else {
          this.setState({ searchResults: books });
        }
      }).catch(this.setState({ searchResults: [] }));
    }else {
      this.setState({ searchResults: [] });
    }
  };

 

  render() {
    const { books, onChangeShelf } = this.props;
    
    this.state.searchResults.forEach(function(searchedBook){
      books.forEach(function(book){
        if (book.id === searchedBook.id) {
          searchedBook.shelf = book.shelf;
        }
      });
      if(!searchedBook.shelf){
        searchedBook.shelf = 'none';
      }
    })

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <HomePage resetSearch={this.resetSearch} />
          <div className="search-books-input-wrapper">
     
            <input type="text" placeholder="You can Search by title or author" value={this.state.value} onChange={this.handleChange} />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.searchResults.map(book => (
              <Book key={book.id} book={book} onChangeShelf={onChangeShelf} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}


