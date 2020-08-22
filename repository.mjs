import { tasks, projects, categories } from './data.mjs';

export function getTasks() {
  return tasks;
}

export function getProjects() {
  return projects;
}

export function getCategories() {
  return categories;
}

export function updateProjectName(projectId, name) {
  let project = projects.find(proj => proj.id === projectId);
  project.name = name;
}
