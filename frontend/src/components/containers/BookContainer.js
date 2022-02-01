import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAuthorThunk, fetchBookThunk, deleteBookThunk, editBookThunk } from "../../store/thunks";
import { BookView } from "../views";

class BookContainer extends Component {
  async componentDidMount() {
    //getting book ID from url
    await this.props.fetchBook(this.props.match.params.id);
    await this.props.fetchAuthor(this.props.book.authorId);
  }

  render() {
    return (
      <BookView
        book={this.props.book}
        author={this.props.author}
        editBook={this.props.editBook}
        deleteBook={this.props.deleteBook}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    book: state.book,
    author: state.author,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchBook: (id) => dispatch(fetchBookThunk(id)),
    fetchAuthor: (authorId) => dispatch(fetchAuthorThunk(authorId)),
    editBook: (bookId) => dispatch(editBookThunk(bookId)),
    deleteBook: (bookId) => dispatch(deleteBookThunk(bookId)),
  };
};

export default connect(mapState, mapDispatch)(BookContainer);
