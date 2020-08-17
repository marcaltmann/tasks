import express from 'express';
import { tasks, projects, categories } from './data.mjs';

let port = process.env.PORT || 3000;
let app = express();

app.set('view engine', 'pug');

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

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
