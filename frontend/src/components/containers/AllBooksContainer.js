import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchAllBooksThunk, deleteBookThunk } from "../../store/thunks";

import AllBooksView from "../views/AllBooksView";

class AllBooksContainer extends Component {
  componentDidMount() {
    this.props.fetchAllBooks();
  }

  render() {
    return (
      <div>
        <AllBooksView
          books={this.props.allBooks}
          deleteBook={this.props.deleteBook}
          deleteBooks={this.props.deleteBooks}
        />
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allBooks: state.allBooks,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllBooks: () => dispatch(fetchAllBooksThunk()),
    deleteBook: (id) => dispatch(deleteBookThunk(id)),
    deleteBooks: (books) =>
      books.map((book) => dispatch(deleteBookThunk(book.id))),
  };
};

export default withRouter(connect(mapState, mapDispatch)(AllBooksContainer));
