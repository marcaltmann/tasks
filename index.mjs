import express from 'express';

let port = process.env.PORT || 3000;
let app = express();

app.get('/', (req, res) => {
  res.end('Hello!');
});

app.listen(port);

console.log('Hello world');
