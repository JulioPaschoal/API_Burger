// CONF. MODULES \\
import express from 'express';
import routes from './routes';

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
  }

  // CONF. ROUTES \\
  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
