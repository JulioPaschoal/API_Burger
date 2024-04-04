/* eslint-disable import/no-unresolved */
// CONF. MODULES \\
import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';
import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import ProductController from './app/controller/ProductController';

// CONF. UPLOADS \\
const uploads = multer(multerConfig);

const routes = new Router();

// CONF. ROUTES \\
routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/products', uploads.single('file'), ProductController.store);
routes.get('/products', ProductController.index);

export default routes;
