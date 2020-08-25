import categoriesSlice from './categories_slice.js';

function initializeStore(reduxStore) {
  const { actions } = categoriesSlice;
  const { requestFetch } = actions;
  reduxStore.dispatch(requestFetch());
}

export default initializeStore;
