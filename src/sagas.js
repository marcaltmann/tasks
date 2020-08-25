import 'regenerator-runtime/runtime';
import { call, put, takeLatest } from 'redux-saga/effects';

import Api from './api.js';
import categoriesSlice from './categories_slice.js';

function* fetchCategories() {
  const { actions: { resolveFetch, rejectFetch } } = categoriesSlice;
  try {
    const data = yield call(Api.fetchCategories);
    yield put(resolveFetch(data));
  } catch (e) {
    yield put(rejectFetch(e.message));
  }
}

function* categoriesSaga() {
  const { actions: { requestFetch } } = categoriesSlice;
  yield takeLatest(requestFetch.type, fetchCategories);
}

export default categoriesSaga;
