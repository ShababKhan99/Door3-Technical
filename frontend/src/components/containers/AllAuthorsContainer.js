import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllAuthorsThunk, deleteAuthorThunk } from "../../store/thunks";
import { AllAuthorsView } from "../views";

class AllAuthorsContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllAuthors();
  }

  render() {
    return (
      <AllAuthorsView
        authors={this.props.allAuthors}
        deleteAuthor={this.props.deleteAuthor}
        deleteAuthors={this.props.deleteAuthors}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allAuthors: state.allAuthors,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllAuthors: () => dispatch(fetchAllAuthorsThunk()),
    deleteAuthor: (id) => dispatch(deleteAuthorThunk(id)),
    // deleteAuthors: (authors) =>
    //   authors.map((author) => dispatch(deleteAuthorThunk(author.id))),
  };
};

// Type check props;
AllAuthorsContainer.propTypes = {
  allAuthors: PropTypes.array.isRequired,
  fetchAllAuthors: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllAuthorsContainer);
