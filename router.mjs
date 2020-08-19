import path from 'path';
import { tasks, projects, categories } from './data.mjs';

function categoriesWithTasks() {
  let clonedCategories = categories.map(cat => Object.assign({}, cat));

  clonedCategories.forEach((cat) => {
    cat.tasks = tasks.filter(task => task.category === cat.id);
  });

  return clonedCategories;
}

function projectsWithTasks() {
  let clonedProjects = projects.map(proj => Object.assign({}, proj));

  clonedProjects.forEach(proj => {
    proj.nextTask = tasks.find(task => task.id === proj.nextTask);
  });

  return clonedProjects;
}

function router(app) {
  app.get('/api/tasks', (req, res) => {
    res.json({
      tasks,
    });
  });

  app.get('/api/projects', (req, res) => {
    res.json({
      projects: projectsWithTasks(),
    });
  });

  app.get('/api/categories', (req, res) => {
    res.json({
      categories: categoriesWithTasks(),
    });
  });

  app.get('/*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
  });
}

export default router;
