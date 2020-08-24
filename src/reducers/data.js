const initialState = {
  categories: {
    byId: {},
    byOrder: [],
  },
  projects: {
    byId: {},
    byOrder: [],
  },
  tasks: {
    byId: {},
    byOrder: [],
  },
  fetched: false,
  error: null,
};

function data(state = initialState, action) {
  switch (action.type) {
    case 'data/fetchSucceeded':
      return {
        byId: action.payload.categories.entities.categories,
        byOrder: action.payload.categories.result,
      };
    case 'data/fetchFailed':
      return initialState;
    default:
      return state;
  }
}

export default categories;
