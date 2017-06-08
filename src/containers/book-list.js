import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
      return this.props.books.map((book) => {
        return (
          <li
            key={book.title}
            onClick={() => this.props.selectBook(book)}
            className="list-group-item">
            {book.title}
          </li>
        );
      });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  //whatever is returned will show up as props in BookList
  return {
    books: state.books
  };
}

//anything retured by this ends up as props on bookList container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result is passed to our reducers
  //dispatch recieves actions and gives them to reduces
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

//promote booklist from component to container, needs to know about dispatch method
//this makes it a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
