import { normalize, schema } from 'normalizr';

const categorySchema = new schema.Entity('categories');
const categoryListSchema = new schema.Array(categorySchema);
const taskSchema = new schema.Entity('tasks');
const taskListSchema = new schema.Array(taskSchema);
const projectSchema = new schema.Entity('project');
const projectListSchema = new schema.Array(projectSchema);

export default {
  fetchCategories() {
    return fetch('/api/categories')
      .then(response => response.json())
      .then(body => normalize(body.categories, categoryListSchema));
  },
  fetchTasks() {
    return fetch('/api/tasks')
      .then(response => response.json())
      .then(body => normalize(body.tasks, taskListSchema));
  },
};
