// CONF. MODULES \\
import * as Yup from 'yup';
import Product from '../models/Product';
import Category from '../models/Category';

// CONF. PRODUCTCONTROLLER \\
class ProductController {
  // METODO STORE \\
  async store(req, res) {
    // VALIDADNDO DADOS RECEBIDO \\
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category_id: Yup.number().required(),
    });
    try {
      await schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
    // PEGANDO DADOS  \\
    const { filename: path } = req.file;
    const { name, price, category_id } = req.body;

    // GRAVANDO DADSO NO BANCO \\
    const product = await Product.create({ name, price, category_id, path });
    return res.json(product);
  }

  // METODO INDEX \\
  async index(req, res) {
    const products = await Product.findAll({
      // INCLUINDO DADOS DA TABELA CATEGORY \\
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    });
    return res.json(products);
  }
}

export default new ProductController();
