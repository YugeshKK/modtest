// wordActions.js
import axios from 'axios';

export const SEARCH_WORD = 'SEARCH_WORD';
export const FETCH_WORD_DETAILS = 'FETCH_WORD_DETAILS';

export const searchWord = (word) => async (dispatch) => {
  // Add API call to fetch word details
  const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  dispatch({ type: SEARCH_WORD, payload: word });
  dispatch({ type: FETCH_WORD_DETAILS, payload: response.data[0] });
};
