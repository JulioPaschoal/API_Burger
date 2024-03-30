// CONF. MODULES \\
import { Router } from 'express';
import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';

const routes = new Router();

// CONF. ROUTES \\
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;
