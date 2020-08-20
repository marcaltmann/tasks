function categories(state = null, action) {
  switch (action.type) {
    case 'CATEGORIES_FETCH_SUCCEEDED':
      return action.payload;
    case 'CATEGORIES_FETCH_FAILED':
      return null;
    default:
      return state;
  }
}

export default categories;
