import { tasks, projects, categories } from './data.mjs';

function categoriesWithTasks() {
  let clonedCategories = categories.map(cat => Object.assign({}, cat));

  clonedCategories.forEach((cat) => {
    cat.tasks = tasks.filter(task => task.category === cat.id);
  });

  return clonedCategories;
}

function router(app) {
  app.get('/api/tasks', (req, res) => {
    res.json({
      tasks,
    });
  });

  app.get('/api/projects', (req, res) => {
    res.json({
      projects,
    });
  });

  app.get('/api/categories', (req, res) => {
    res.json({
      categories: categoriesWithTasks(),
    });
  });
}

export default router;
