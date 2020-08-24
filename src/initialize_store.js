function initializeStore(reduxStore) {
  reduxStore.dispatch({ type: 'data/fetchRequested' });
}

export default initializeStore;
