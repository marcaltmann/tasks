const initialState = {
  byId: {},
  byOrder: [],
};

function categories(state = initialState, action) {
  switch (action.type) {
    case 'CATEGORIES_FETCH_SUCCEEDED':
      return {
        byId: action.payload.entities.categories,
        byOrder: action.payload.result,
      };
    case 'CATEGORIES_FETCH_FAILED':
      return initialState;
    default:
      return state;
  }
}

export default categories;
