// wordReducer.js
import { SEARCH_WORD, FETCH_WORD_DETAILS } from '../actions/wordActions';

const initialState = {
  history: [],
  wordDetails: null,
};

const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_WORD:
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case FETCH_WORD_DETAILS:
      return {
        ...state,
        wordDetails: action.payload,
      };
    default:
      return state;
  }
};

export default wordReducer;
