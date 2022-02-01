import { FETCH_AUTHOR } from "../actions/actionTypes";

const initialState = {
  books: [],
};

const author = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHOR:
      return action.payload;
    default:
      return state;
  }
};

export default author;