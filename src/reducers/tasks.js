const initialState = { byId: {} };

function tasks(state = initialState, action) {
  switch (action.type) {
    case 'tasks/fetchSucceeded':
      return {
        byId: action.payload.entities.tasks,
      };
    case 'tasks/fetchFailed':
      return initialState;
    default:
      return state;
  }
}

export default tasks;
