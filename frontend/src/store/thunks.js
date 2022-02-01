import * as ac from './actions/actionCreators';
const axios = require('axios');

// THUNKS

//All authors
export const fetchAllAuthorsThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`/api/authors`);
    dispatch(ac.fetchAllAuthors(res.data));
  } catch(err) {
    console.error(err);
  }
};

//Single author
export const fetchAuthorThunk = (id) => async (dispatch) => {
  // thunk creator would not an be async function 
  // if using Promise.then:
  // return axios
  //   .get(`/api/authors/${id}`)
  //   .then((res) => res.data)
  //   .then((author) => dispatch(ac.fetchAuthor(author)))
  //   .catch((err) => console.log(err));
  try {
    let res = await axios.get(`/api/authors/${id}`);
    dispatch(ac.fetchAuthor(res.data));
  } catch(err) {
    console.error(err);
  }
};

//All books
export const fetchAllBooksThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`/api/books`);
    dispatch(ac.fetchAllBooks(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const addAuthorThunk = (author) => async (dispatch) => {
  try {
    let res = await axios.post(`/api/authors`, author);
    dispatch(ac.addAuthor(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

export const deleteAuthorThunk = AuthorId => async dispatch => {
  try {
    await axios.delete(`/api/authors/${AuthorId}`);
    //delete succesful so change state with dispatch
    dispatch(ac.deleteAuthor(AuthorId));
  } catch(err) {
    console.error(err);
  }
};

export const editAuthorThunk = author => async dispatch => {
  try {
    let updatedAuthor = await axios.put(`/api/authors/${author.id}`, author);
    dispatch(ac.editAuthor(updatedAuthor));
  } catch(err) {
    console.error(err);
  }
};

export const addBookThunk = (book) => async (dispatch) => {
  try {
    let res = await axios.post(`/api/books`, book);
    dispatch(ac.addBook(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

export const deleteBookThunk = bookId => async dispatch => {
  try {
    await axios.delete(`/api/books/${bookId}`);
    //delete succesful so change state with dispatch
    dispatch(ac.deleteBook(bookId));
  } catch(err) {
    console.error(err);
  }
};

export const editBookThunk = book => async dispatch => {
  try {
    let updatedBook = await axios.put(`/api/books/${book.id}`, book);
    dispatch(ac.editBook(updatedBook));
  } catch(err) {
    console.error(err);
  }
};

//Single book
export const fetchBookThunk = id => async dispatch => {
  try {
    let res = await axios.get(`/api/books/${id}`);
    dispatch(ac.fetchBook(res.data));
  } catch(err) {
    console.error(err);
  }
};
