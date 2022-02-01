import { FETCH_BOOK } from "../actions/actionTypes";

const initialState = {
  campus: {},
};

// REDUCER;
const book = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default book;