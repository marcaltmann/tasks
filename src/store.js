import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer.js';
import { categoriesSaga, tasksSaga } from './sagas.js';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(categoriesSaga);
sagaMiddleware.run(tasksSaga);

export default store;
