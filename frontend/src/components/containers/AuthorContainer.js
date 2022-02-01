import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAuthorThunk } from "../../store/thunks";

import { AuthorView } from "../views";

class AuthorContainer extends Component {
  componentDidMount() {
    //getting author ID from url
    this.props.fetchAuthor(this.props.match.params.id);
  }

  render() {
    return (
      <AuthorView
        author={this.props.author}
        deleteAuthor={this.props.deleteAuthor}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    author: state.author,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchAuthor: (id) => dispatch(fetchAuthorThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(AuthorContainer);
