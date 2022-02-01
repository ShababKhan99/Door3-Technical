import * as at from "../actions/actionTypes";

// REDUCER;
const allAuthors = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_AUTHORS:
      return action.payload;
    case at.ADD_AUTHOR:
      return [...state, action.payload]
    case at.DELETE_AUTHOR:
      return state.filter(author => author.id!==action.payload);
    case at.EDIT_AUTHOR:
      return state.map(author => { 
        return (
          author.id===action.payload.id ? action.payload : author
        );
      });
    default:
      return state;
  }
};

export default allAuthors;