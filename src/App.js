import React from 'react'
import * as BooksAPI from './BooksAPI'
import Shelves from './Shelves.js'
import './App.css'
import Search from './Search.js'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    
    //state for holding all the books we get from the server
    books: [],
    //showSearchPage: false
  }
//func for getting all books from server booksAPI
booksGetter = () => BooksAPI.getAll().then(books =>{this.setState({books}) })
booksShelfUpdate = (book, shelf) =>{ BooksAPI.update(book, shelf).then(books => this.booksGetter())}


//invoking the method for mounting
  componentDidMount() {
    this.booksGetter()
  }
//first Route for the main page 
//component of shelves to categorize books
//Second Route for the search page
render() {

    return (
      <div>
       
          <Route exact path='/' render={() => (
  
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
  
  		
              <div>
                  <Shelves books={this.state.books} onShelfChange={(book, shelf) =>this.booksShelfUpdate(book, shelf)}/>
              </div>
            </div>
            
          </div>
        
    
      )}/>
			
     	 <Route path='/search' render={() => (<Search books={this.state.books} onShelfChange={(book, shelf) =>this.booksShelfUpdate(book, shelf)}/>)} />
      </div>
    )
  }
}

export default BooksApp

