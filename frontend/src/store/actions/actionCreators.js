import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All authores
export const fetchAllAuthors = (authors) => {
  return {
    type: at.FETCH_ALL_AUTHORS,
    payload: authors,
  };
};

export const addAuthor = (author) => {
  return {
    type: at.ADD_AUTHOR,
    payload: author,
  };
};

export const deleteAuthor = (authorId) => {
  return {
    type: at.DELETE_AUTHOR,
    payload: authorId,
  };
};


export const editAuthor = (author) => {
  return {
    type: at.EDIT_AUTHOR,
    payload: author,
  };
};

//Single author
export const fetchAuthor = (author) => {
  return {
    type: at.FETCH_AUTHOR,
    payload: author,
  };
};

//All books
export const fetchAllBooks = (books) => {
  return {
    type: at.FETCH_ALL_BOOKS,
    payload: books,
  };
};

export const addBook = (book) => {
  return {
    type: at.ADD_BOOK,
    payload: book,
  };
};

export const deleteBook = (bookId) => {
  return {
    type: at.DELETE_BOOK,
    payload: bookId,
  };
};


export const editBook = (book) => {
  return {
    type: at.EDIT_BOOK,
    payload: book,
  };
};

//Single book
export const fetchBook = (book) => {
  return {
    type: at.FETCH_BOOK,
    payload: book,
  };
};