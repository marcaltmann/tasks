import { combineReducers } from 'redux';
import categoriesSlice from '../categories_slice.js';

let rootReducer = combineReducers({
  categories: categoriesSlice.reducer,
});

export default rootReducer;
