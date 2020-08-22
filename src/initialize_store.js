function initializeStore(reduxStore) {
  reduxStore.dispatch({ type: 'categories/fetchRequested' });
  reduxStore.dispatch({ type: 'projects/fetchRequested' });
  reduxStore.dispatch({ type: 'tasks/fetchRequested' });
}

export default initializeStore;
