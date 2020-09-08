import React from 'react'
import Book from "./Book.js"


class Shelf extends React.Component {
  //lisitng books in props

render() {
    let bookShelf;
  if(this.props.books){
    bookShelf = this.props.books.map(book =>
      <Book key={book.id} book={book}  onShelfChange={this.props.onShelfChange} />)
  } else {
    bookShelf = <div></div>
  }
    return (
        <ol className="books-grid">

			{bookShelf}
</ol>
                    
    )}
}
export default Shelf

