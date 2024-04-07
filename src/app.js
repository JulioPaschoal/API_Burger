// CONF. MODULES \\
import express from 'express';
import { resolve } from 'path';
import routes from './routes';

// IMPORT  DB \\
import './database';

// CONF. APP \\
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  // CONF. MIDDLEWARE \\
  middlewares() {
    this.app.use(express.json());
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );
    this.app.use(
      '/category-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );
  }

  // CONF. ROUTES \\
  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
