// CONF. MODULES \\
import * as Yup from 'yup';
import Category from '../models/Category';

// CONF. CATEGORYCONTROLLER \\
class CategoryController {
  // METODO STORE \\
  async store(req, res) {
    // VALIDADNDO DADOS RECEBIDO \\
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });
    try {
      await schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
    // PEGANDO DADOS  \\
    const { name } = req.body;

    // VALIDANDO CATEGORIAS SE JA NAO EXISTE \\
    const categoryExists = await Category.findOne({
      where: { name },
    });
    if (categoryExists) {
      return res.status(400).json({ error: 'Category already exists' });
    }

    // GRAVANDO DADSO NO BANCO \\
    const { id } = await Category.create({ name });
    return res.json({ name, id });
  }

  // METODO INDEX \\
  async index(req, res) {
    const category = await Category.findAll();
    return res.json(category);
  }
}

export default new CategoryController();
