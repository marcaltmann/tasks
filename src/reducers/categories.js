const initialState = {
  byId: {},
  byOrder: [],
};

function categories(state = initialState, action) {
  switch (action.type) {
    case 'categories/fetchSucceeded':
      return {
        byId: action.payload.categories.entities.categories,
        byOrder: action.payload.categories.result,
      };
    case 'categories/fetchFailed':
      return initialState;
    default:
      return state;
  }
}

export default categories;
