import 'regenerator-runtime/runtime';
import { call, put, takeLatest } from 'redux-saga/effects';

import Api from './api.js';
import { createDataFetchSucceeded, createDataFetchFailed }
  from './action_creators.js';

function* fetchData(action) {
  try {
    const data = yield call(Api.fetchData);
    yield put(createDataFetchSucceeded(data));
  } catch (error) {
    yield put(createDataFetchFailed(error));
  }
}

function* mySaga() {
  yield takeLatest('data/fetchRequested', fetchData);
}

export default mySaga;
