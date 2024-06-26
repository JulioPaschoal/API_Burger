// CONF. MODULES \\
import { v4 } from 'uuid';
import * as Yup from 'yup';
import User from '../models/User';

// CONF. CONTROLLER \\
class UserController {
  async store(req, res) {
    // VALIDANDO DADOS ENVIADO \\
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      admin: Yup.string(),
    });
    try {
      await schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
    // INSERINDO NO BANCO DE DADOS \\
    const { name, email, password, admin } = req.body;
    // VALIDANDO EMAIL SE JÁ EXISTE \\
    const userExists = await User.findOne({
      where: { email },
    });
    if (userExists) {
      return res.status(409).json({ error: 'User already exists' });
    }
    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
      admin,
    });
    return res.status(201).json({ id: user.id, name, email, admin });
  }
}

export default new UserController();
