import * as at from "../actions/actionTypes";

// REDUCER;
const allBooks = (state=[], action) => {
  switch (action.type) {
    case at.FETCH_ALL_BOOKS:
      return action.payload;
    case at.ADD_BOOK:
      return [...state, action.payload]
    case at.DELETE_BOOK:
      return state.filter(book => book.id!==action.payload);
    case at.EDIT_BOOK:
      return state.map(book => { 
        return (
          book.id===action.payload.id ? action.payload : book
        );
      });
    default:
      return state;
  }
};

export default allBooks;