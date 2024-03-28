import { Router } from 'express';
import { v4 } from 'uuid';
import User from './app/models/User';

const routes = new Router();

// CONF. ROUTES \\

routes.get('/', async (req, res) => {
  const user = await User.create({
    id: v4(),
    name: 'Julio Paschoal',
    email: 'julio@papchoal.com',
    password_hash: '4as7987d54a57',
  });
  return res.json(user);
});

export default routes;
