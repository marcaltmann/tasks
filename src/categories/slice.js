import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: null,
  reducers: {
    requestFetch: state => state,
    resolveFetch: (state, action) => ({
      byId: action.payload.entities.categories,
      allIds: action.payload.result,
    }),
    rejectFetch: (state, action) => ({
      error: action.payload,
    }),
  },
});

export default categoriesSlice;
