import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import NewBookView from "../views/NewBookView";
import { addBookThunk } from "../../store/thunks";

class NewBookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      description: "",
      authorId: null,
      redirect: false,
      redirectId: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let book = {
      title: this.state.title,
      year: this.state.year,
      description: this.state.description,
      authorId: this.state.authorId,
    };

    let newBook = await this.props.addBook(book);

    this.setState({
      title: "",
      year: "",
      description: "",
      authorId: null,
      redirect: true,
      redirectId: newBook.id,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/book/${this.state.redirectId}`} />;
    }
    return (
      <NewBookView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addBook: (book) => dispatch(addBookThunk(book)),
  };
};

export default connect(null, mapDispatch)(NewBookContainer);
