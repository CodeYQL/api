import {Router, Request, Response} from 'express';

function register(req: Request, res: Response) {
  res.json({});
}

function login(req: Request, res: Response) {
  res.json({});
}

function logout(req: Request, res: Response) {
  res.json({});
}

function events(req: Request, res: Response) {
  res.json({});
}

function event(req: Request, res: Response) {
  res.json({});
}

export function routes(router: Router) {
  router.post('/register', register);
  router.post('/login', login);
  router.post('/logout', logout);
  router.get('/events', events);
  router.get('/events/:event_id', event);

  return router;
}
