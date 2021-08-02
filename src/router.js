import {
  Router
} from 'express';

function routes(app) {
  const router = Router();

  router.get('/', async(req, res, next) => {
    res.render('index.html');
  });

  return router;
}

export default routes;