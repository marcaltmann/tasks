import compression from 'compression';
import express from 'express';
import router from './router.mjs';

let port = process.env.PORT || 3000;
let app = express();

app.use(compression());

app.set('view engine', 'pug');

router(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
