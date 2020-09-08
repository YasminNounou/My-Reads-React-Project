import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from "./Shelf.js";
import * as BooksAPI from './BooksAPI';


class Search extends React.Component{
	//state for holding user's query"search"
    state={
      	searchBooks:[],
        query:''
    }


//getting result for search from server
bookSearch = (query, maxResults) => BooksAPI.search(query, maxResults).then(searchBooks => {
  for (var bookNum in searchBooks) {
  	for (const homeBookNum in this.props.books){
    	if(searchBooks[bookNum].id ===this.props.books[homeBookNum].id){
        	searchBooks[bookNum].shelf = this.props.books[homeBookNum].shelf
        }
    }
    this.setState({searchBooks})
}


}
)

//update function to update the query with user i/p
updateQuery=(query)=>{
    this.setState(()=>({
        query
    }))
 this.bookSearch(query, 10)
  
}

/*bookSearch = query => {
        return BooksAPI.search(query)
            .then(searchBooks => searchBooks instanceof Array ? searchBooks : [])
    }*/
//constructinge query state and the porps.books holding all books
//
//showingbooks returns the result array to the shelf component to list it for the user
//the close-search button is linked to the main page to return back
render(){
    //  const { query } = this.state
  //   const { books } = this.props
  //filtering search by name
  //   const booksByName = (query === '') && searchBooks ? []
    //              : searchBooks.filter((b) => (
      //             b.title.toLowerCase().includes(query.toLowerCase())
        //          ))
  //filtering search by authors
  //const booksByAuthor = (query === '') && searchBooks? [] :	searchBooks.filter ( b => {

  //   	let book = b.authors.some((author) => !!author.toLowerCase().includes(query.toLowerCase()))
    //      return book
    // })


//merging both arrays together to remove dublicates to get one array with the search result
//const showingBooks = booksByAuthor && booksByAuthor.length > 0? booksByAuthor.concat( booksByName.filter((b)=> !booksByAuthor.id === b.id)) : booksByName; 

let searchShelf;
if(this.state.searchBooks instanceof Array){
	searchShelf =    <Shelf books={this.state.searchBooks} onShelfChange={(book, shelf) =>this.props.onShelfChange(book, shelf)}/>	;

} else{
  searchShelf = <div>Not Found</div>;
}
return(
        <div className='search-books'>
				 
      	<div className='search-books-bar'>
        <Link to='/'>
      	<button className='close-search'>
            Close
      	</button>
        </Link>
      	<div className='search-books-input-wrapper'>
      				<input 
                type='text'
                placeholder='Search by title or author'
                value={this.state.query}
                onChange={(event)=>this.updateQuery(event.target.value)}
                />
        </div>
			</div>

        <div className="search-books-results">
            {searchShelf}
        </div>
      </div>
    )
}


}
export default Search 
