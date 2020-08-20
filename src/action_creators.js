import { normalize, schema } from 'normalizr';

const taskSchema = new schema.Entity('tasks');
const taskListSchema = new schema.Array(taskSchema);
const categorySchema = new schema.Entity('categories', {
  tasks: taskListSchema,
});
const categoryListSchema = new schema.Array(categorySchema);

export function createCategoriesFetchSucceeded(data) {
  const normalizedData = normalize(data, categoryListSchema);
  return {
    type: 'CATEGORIES_FETCH_SUCCEEDED',
    payload : normalizedData,
  };
};

export const createCategoriesFetchFailed = (error) => ({
  type: 'CATEGORIES_FETCH_FAILED',
  message: error.message,
});
