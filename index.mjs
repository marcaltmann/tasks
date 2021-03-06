import compression from 'compression';
import express from 'express';
import router from './router.mjs';

let port = process.env.PORT || 3000;
let app = express();

app.use(compression());
app.use(express.json());
app.use(express.static('dist'));

router(app);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

export default app;
