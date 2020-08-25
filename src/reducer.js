import { combineReducers } from 'redux';
import { slice as categoriesSlice } from './categories/index.js';
import { slice as tasksSlice } from './tasks/index.js';

let rootReducer = combineReducers({
  categories: categoriesSlice.reducer,
  tasks: tasksSlice.reducer,
});

export default rootReducer;
