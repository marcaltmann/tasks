import { normalize, schema } from 'normalizr';

const taskSchema = new schema.Entity('tasks');
const taskListSchema = new schema.Array(taskSchema);
const categorySchema = new schema.Entity('categories');
const categoryListSchema = new schema.Array(categorySchema);
const projectSchema = new schema.Entity('project');
const projectListSchema = new schema.Array(projectSchema);

export function createCategoriesFetchSucceeded(data) {
  const normalizedData = normalize(data, categoryListSchema);
  return {
    type: 'categories/fetchSucceeded',
    payload : normalizedData,
  };
};

export const createCategoriesFetchFailed = (error) => ({
  type: 'categories/fetchFailed',
  message: error.message,
});
