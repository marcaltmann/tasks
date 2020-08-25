import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: null,
  reducers: {
    requestFetch: state => state,
    resolveFetch: (state, action) => ({
      byId: action.payload.entities.tasks,
      allIds: action.payload.result,
    }),
    rejectFetch: (state, action) => ({
      error: action.payload,
    }),
  },
});

export default tasksSlice;
