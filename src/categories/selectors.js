import { createSelector } from '@reduxjs/toolkit';

const categoriesSelector = state => state.categories;

export const categoriesLoadedSelector = createSelector(
  [categoriesSelector],
  categories => categories !== null
);

export const categoryIdsSelector = createSelector(
  [categoriesSelector, categoriesLoadedSelector],
  (categories, loaded) => loaded ? categories.allIds : []
);

export const categoryByIdSelector = (state, id) => state.categories.byId[id];
