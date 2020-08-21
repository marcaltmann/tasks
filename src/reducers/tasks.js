const initialState = { byId: {} };

function tasks(state = initialState, action) {
  switch (action.type) {
    case 'CATEGORIES_FETCH_SUCCEEDED':
      return {
        byId: action.payload.entities.tasks,
      };
    case 'CATEGORIES_FETCH_FAILED':
      return initialState;
    default:
      return state;
  }
}

export default tasks;
