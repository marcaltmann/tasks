import 'regenerator-runtime/runtime';
import { call, put, takeLatest } from 'redux-saga/effects';

import Api from './api.js';
import { createCategoriesFetchSucceeded, createCategoriesFetchFailed }
  from './action_creators.js';

// Worker saga: will be fired on ... action
function* fetchCategories(action) {
  try {
    const categories = yield call(Api.fetchCategories);
    yield put(createCategoriesFetchSucceeded(categories));
  } catch (error) {
    yield put(createCategoriesFetchFailed(error));
  }
}

// Starts fetchCategories on CATEGORIES_FETCH_REQUESTED action.
function* mySaga() {
  yield takeLatest('CATEGORIES_FETCH_REQUESTED', fetchCategories);
}

export default mySaga;
