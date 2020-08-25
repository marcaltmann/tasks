import { slice as categoriesSlice } from './categories/index.js';
import { slice as tasksSlice } from './tasks/index.js';

function initializeStore(reduxStore) {
  reduxStore.dispatch(categoriesSlice.actions.requestFetch());
  reduxStore.dispatch(tasksSlice.actions.requestFetch());
}

export default initializeStore;
