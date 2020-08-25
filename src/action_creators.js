import { createAction } from '@reduxjs/toolkit';

export const requestCategoriesFetch = createAction('categories/requestFetch');
export const resolveCategoriesFetch = createAction('categories/resolveFetch');
export const rejectCategoriesFetch = createAction('categories/rejectFetch');
