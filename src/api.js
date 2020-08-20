let Api = {
  fetchCategories() {
    return fetch('/api/categories');
  },
};

export default Api;
