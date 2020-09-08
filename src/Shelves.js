import React from 'react'
import Shelf from './Shelf.js'
import { Link } from 'react-router-dom';

 //3 categories for books each category would contain bunch of books
  //on moving a book from one shelf to another "Continue reading" -> "To Read" handled to update book's shelf 
//shelf component responsible for listing a book 
//link the ADD button to search to navigate to the search page


class Shelves extends React.Component {

render() { 
    const shelves = {
    currentlyReading: ['Currently Reading', 'currentlyReading'],
    wantToRead: ['Want to Read', 'wantToRead'],
    read: ['Read', 'read']
  }
    return (
  <div>{
       Object.keys(shelves).map((key,index) =>
          <div key={shelves[key][1]} className="bookshelf">
           <h2 className="bookshelf-title">{shelves[key][0]}</h2>
           <div className="bookshelf-books">
  
             <Shelf  books={this.props.books.filter(book => book.shelf === shelves[key][1])} onShelfChange={(book, shelf) =>this.props.onShelfChange(book, shelf)}/>			</div>
			</div>
)}

   		<div className="open-search">

        <Link
            to='/search'>
             Add a book
        </Link>
       </div>
	</div>

)}
}

export default Shelves

                