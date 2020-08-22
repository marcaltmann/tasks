const initialState = {
  byId: {},
  byOrder: [],
};

function categories(state = initialState, action) {
  switch (action.type) {
    case 'categories/fetchSucceeded':
      return {
        byId: action.payload.entities.categories,
        byOrder: action.payload.result,
      };
    case 'categories/fetchFailed':
      return initialState;
    default:
      return state;
  }
}

export default categories;
