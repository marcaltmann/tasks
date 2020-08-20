import path from 'path';
import { getTasks, getProjectsWithTasks, getCategoriesWithTasks }
  from './repository.mjs';

function router(app) {
  app.get('/api/tasks', (req, res) => {
    res.json({
      tasks: getTasks(),
    });
  });

  app.get('/api/projects', (req, res) => {
    res.json({
      projects: getProjectsWithTasks(),
    });
  });

  app.get('/api/categories', (req, res) => {
    res.json({
      categories: getCategoriesWithTasks(),
    });
  });

  app.get('/*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
  });

  app.put('/api/update-project-name', (req, res) => {
    console.log(req.body);
  });
}

export default router;
