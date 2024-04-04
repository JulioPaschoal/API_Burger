// CONF. MIDDLEWARES \\
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

export default (req, res, next) => {
  // VERIFICAR TOKEN \\
  const authToken = req.headers.authorization;

  // VERIFICAR SE ESTA VINDO TOKEN \\
  if (!authToken) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // VERIFICAR SE O TOKEN É VALIDO \\
  const token = authToken.split(' ')[1];
  try {
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        throw new Error();
      }
      req.userId = decoded.id;
      return next();
    });
  } catch (err) {
    return res.status(401).json({ error: 'Token is invalid' });
  }
};
