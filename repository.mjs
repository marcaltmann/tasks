import { tasks, projects, categories } from './data.mjs';

function getTasks() {
  return tasks.map(task => Object.assign({}, task));
}

function getProjectsWithTasks() {
  let clonedProjects = projects.map(proj => Object.assign({}, proj));

  clonedProjects.forEach(proj => {
    proj.nextTask = tasks.find(task => task.id === proj.nextTask);
  });

  return clonedProjects;
}

function getCategoriesWithTasks() {
  let clonedCategories = categories.map(cat => Object.assign({}, cat));

  clonedCategories.forEach((cat) => {
    cat.tasks = tasks.filter(task => task.category === cat.id);
  });

  return clonedCategories;
}

export { getTasks, getCategoriesWithTasks, getProjectsWithTasks };
