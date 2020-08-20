import { combineReducers } from 'redux';
import counter from './counter.js';

let rootReducer = combineReducers({
  counter,
});

export default rootReducer;
