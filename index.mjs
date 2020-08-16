import express from 'express';
import { tasks } from './data.mjs';

let port = process.env.PORT || 3000;
let app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    tasks: tasks,
    title: 'Tasks',
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
