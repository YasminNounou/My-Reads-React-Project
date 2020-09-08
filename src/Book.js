import React from 'react'

//on change of shelf state to move to another shelf update shelf state to selected shelf

class Book extends React.Component {

  onShelfChange=(event)=> {this.props.onShelfChange(this.props.book, event.target.value) }
  

  
render() {
  let bookCover;
  if (this.props.book && this.props.book.imageLinks && this.props.book.imageLinks.smallThumbnail) {
          bookCover = <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${this.props.book.imageLinks.smallThumbnail})`}}></div>;
 
    } else {
    bookCover =  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: ''}}> </div>;

    }
    return (

						<div className="book">
                          <div className="book-top">
                            
{bookCover}
                         		<div className="book-shelf-changer">
										
                              <select value={this.props.book.shelf || "none"}  onChange={this.onShelfChange}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                          <div className="book-authors">{this.props.book.authors}</div>
                        </div>

                    
    )}
}
export default Book


