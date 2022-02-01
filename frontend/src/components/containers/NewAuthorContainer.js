import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import NewAuthorView from "../views/NewAuthorView";
import { addAuthorThunk } from "../../store/thunks";

class NewAuthorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dob: "",
      description: "",
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

    let author = {
      name: this.state.name,
      dob: this.state.dob,
      description: this.state.description,
    };

    let newAuthor = await this.props.addAuthor(author);

    this.setState({
      name: "",
      dob: "",
      description: "",
      redirect: true,
      redirectId: newAuthor.id,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/author/${this.state.redirectId}`} />;
    }
    return (
      <NewAuthorView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addAuthor: (author) => dispatch(addAuthorThunk(author)),
  };
};

export default connect(null, mapDispatch)(NewAuthorContainer);
