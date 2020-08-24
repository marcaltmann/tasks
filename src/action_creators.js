import { normalize, schema } from 'normalizr';

const taskSchema = new schema.Entity('tasks');
const taskListSchema = new schema.Array(taskSchema);
const categorySchema = new schema.Entity('categories');
const categoryListSchema = new schema.Array(categorySchema);
const projectSchema = new schema.Entity('project');
const projectListSchema = new schema.Array(projectSchema);

export const createDataFetchRequested = () => ({
  type: 'data/fetchRequested',
});

export const createDataFetchSucceeded = (data) => ({
  type: 'data/fetchSucceeded',
  payload: {
    categories: normalize(data.categories, categoryListSchema),
    projects: normalize(data.projects, projectListSchema),
    tasks: normalize(data.tasks, taskListSchema),
  },
});

export const createDataFetchFailed = (error) => ({
  type: 'data/fetchFailed',
  message: error.message,
});
