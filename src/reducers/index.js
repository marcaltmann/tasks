import { combineReducers } from 'redux';
import categories from './categories.js';
import counter from './counter.js';

let rootReducer = combineReducers({
  categories,
  counter,
});

export default rootReducer;
