import 'regenerator-runtime/runtime';
import { call, put, takeLatest } from 'redux-saga/effects';
import Api from './api';

// Worker saga: will be fired on ... action
function* fetchCategories(action) {
  console.log('before yield')
  try {
    const categories = yield call(Api.fetchCategories);
    yield put({ type: 'CATEGORIES_FETCH_SUCCEEDED', payload : categories });
  } catch (e) {
    yield put({ type: 'CATEGORIES_FETCH_FAILED', message: e.message });
  }
}

// Starts fetchCategories on CATEGORIES_FETCH_REQUESTED action.
function* mySaga() {
  yield takeLatest('CATEGORIES_FETCH_REQUESTED', fetchCategories);
}

export default mySaga;
