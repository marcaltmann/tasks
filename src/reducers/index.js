import { combineReducers } from 'redux';
import categories from './categories.js';
import counter from './counter.js';
import tasks from './tasks.js';

let rootReducer = combineReducers({
  categories,
  counter,
  tasks,
});

export default rootReducer;
