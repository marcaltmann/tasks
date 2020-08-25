import 'regenerator-runtime/runtime';
import { call, put, takeLatest } from 'redux-saga/effects';

import Api from './api.js';
import { slice as categoriesSlice } from './categories/index.js';
import { slice as tasksSlice } from './tasks/index.js';

function* fetchCategories() {
  const { actions: { resolveFetch, rejectFetch } } = categoriesSlice;
  try {
    const data = yield call(Api.fetchCategories);
    yield put(resolveFetch(data));
  } catch (e) {
    yield put(rejectFetch(e.message));
  }
}

function* fetchTasks() {
  const { actions: { resolveFetch, rejectFetch } } = tasksSlice;
  try {
    const data = yield call(Api.fetchTasks);
    yield put(resolveFetch(data));
  } catch (e) {
    yield put(rejectFetch(e.message));
  }
}

export function* categoriesSaga() {
  const { actions: { requestFetch } } = categoriesSlice;
  yield takeLatest(requestFetch.type, fetchCategories);
}

export function* tasksSaga() {
  const { actions: { requestFetch } } = tasksSlice;
  yield takeLatest(requestFetch.type, fetchTasks);
}
