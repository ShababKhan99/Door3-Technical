import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditBookView from '../views/EditBookView';
import { editBookThunk, fetchBookThunk } from '../../store/thunks';


class EditBookContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: "", 
          year: "",
          description: "",
          authorId: null, 
          redirect: false, 
          redirectId: null,
          id: null,
        };
    }

    componentDidMount() {
      this.props.fetchBook(window.location.pathname.slice(-1));

      this.setState({
        title: this.props.book.title,
        year: this.props.book.year,
        description: this.props.book.description,
        authorId: this.props.book.authorId,
        redirect: false,
        redirectId: null,
      })
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async (event, sid) => {
        event.preventDefault();

        let editBook = {
            title: this.state.title,
            year: this.state.year,
            description: this.state.description,
            authorId: this.state.authorId,
            id: sid,
        };
        
        await this.props.editBook(editBook);

        this.setState({
          title: "",
          year: "",
          description: "",
          authorId: null, 
          redirect: true, 
          redirectId: sid,
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/book/${this.state.redirectId}`}/>)
        }
        return (
          <EditBookView 
            handleChange = {this.handleChange} 
            handleSubmit = {this.handleSubmit}
            book = {this.props.book}    
          />
        );
    }
}

const mapState = (state) => {
  return {
    book: state.book,
  };
};

const mapDispatch = (dispatch) => {
    return({
        editBook: (book) => dispatch(editBookThunk(book)),
        fetchBook: (book) => dispatch(fetchBookThunk(book)),
    })
}

export default connect(mapState, mapDispatch)(EditBookContainer);