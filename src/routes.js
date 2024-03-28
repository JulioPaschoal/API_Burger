// CONF. MODULES \\
import { Router } from 'express';
import UserController from './app/controller/UserController';

const routes = new Router();

// CONF. ROUTES \\
routes.post('/users', UserController.store);

export default routes;
