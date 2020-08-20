import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers/index.js';
import mySaga from './sagas.js';
import initializeStore from './initialize_store.js';

const sagaMiddleware = createSagaMiddleware();
const storeEnhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  reducer,
  storeEnhancers
);

sagaMiddleware.run(mySaga);

initializeStore(store);

export default store;
