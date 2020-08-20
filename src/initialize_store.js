function initializeStore(reduxStore) {
  reduxStore.dispatch({ type: 'CATEGORIES_FETCH_REQUESTED' });
  reduxStore.dispatch({ type: 'projects/fetchRequested' });
  reduxStore.dispatch({ type: 'tasks/fetchRequested' });
}

export default initializeStore;
