import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers/index.js';
import mySaga from './sagas.js';

const sagaMiddleware = createSagaMiddleware();
const storeEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

const store = createStore(
  reducer,
  storeEnhancers
);

sagaMiddleware.run(mySaga);

export default store;
