export default {
  fetchData() {
    return fetch('/api/all')
      .then(response => response.json());
  },
};
