// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import wordReducer from './reducers/wordReducer';

const rootReducer = combineReducers({
  wordDetails: wordReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
