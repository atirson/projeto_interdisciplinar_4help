import { Router } from 'express';

const routes = new Router();

routes.get('/teste', (req, res) => {
  return res.json({ test: 'Hello Codeminer42' });
});

export default routes;
