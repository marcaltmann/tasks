let Api = {
  fetchCategories() {
    return fetch('/api/categories')
      .then(response => response.json())
      .then(body => body.categories);
  },
};

export default Api;
