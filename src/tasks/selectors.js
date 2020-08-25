import { createSelector } from '@reduxjs/toolkit';

export const taskIdsSelector = state => state.tasks.allIds;
