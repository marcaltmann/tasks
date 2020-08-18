import { tasks, projects, categories } from './data.mjs';

function router(app) {
  // Normal routes
  app.get('/tasks', (req, res) => {
    res.render('tasks', {
      tasks,
      title: 'Tasks',
    });
  });

  app.get('/projects', (req, res) => {
    res.render('projects', {
      projects,
      title: 'Projects',
    });
  });

  app.get('/categories', (req, res) => {
    res.render('categories', {
      categories,
      title: 'Categories',
    });
  });

  app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome' });
  });

  // API routes
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
      categories,
    });
  });
}

export default router;
