import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import EditAuthorView from "../views/EditAuthorView";
import { editAuthorThunk, fetchAuthorThunk } from "../../store/thunks";

class EditAuthorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dob: "",
      description: null,
      redirect: false,
      redirectId: null,
      id: null,
    };
  }

  componentDidMount() {
    this.props.fetchAuthor(window.location.pathname.slice(-1));

    this.setState({
      name: this.props.author.name,
      dob: this.props.author.dob,
      description: this.props.author.description,
      redirect: false,
      redirectId: null,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event, cid) => {
    event.preventDefault();

    let editedAuthor = {
      name: this.state.name,
      imageUrl: this.state.imageURL,
      dob: this.state.dob,
      description: this.state.description,
      id: cid,
    };

    await this.props.editAuthor(editedAuthor);

    this.setState({
      name: "",
      dob: null,
      description: null,
      redirect: true,
      redirectId: cid,
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
      <EditAuthorView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        author={this.props.author}
      />
    );
  }
}

const mapState = (state) => {
  return {
    author: state.author,
  };
};

const mapDispatch = (dispatch) => {
  return {
    editAuthor: (author) => dispatch(editAuthorThunk(author)),
    fetchAuthor: (author) => dispatch(fetchAuthorThunk(author)),
  };
};

export default connect(mapState, mapDispatch)(EditAuthorContainer);
