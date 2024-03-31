// CONF. MODULES \\
import { Router } from 'express';
import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import ProductController from './app/controller/ProductController';

const routes = new Router();

// CONF. ROUTES \\
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/products', ProductController.store);

export default routes;
