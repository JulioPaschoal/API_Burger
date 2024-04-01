// CONF. MODULES \\
import * as Yup from 'yup';
import Product from '../models/Product';

// CONF. PRODUCTCONTROLLER \\
class ProductController {
  // VALIDADNDO DADOS RECEBIDO \\
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category: Yup.string().required(),
    });
    try {
      await schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
    // PEGANDO DADOS  \\
    const { filename: path } = req.file;
    const { name, price, category } = req.body;

    // GRAVANDO DADSO NO BANCO \\
    const product = await Product.create({ name, price, category, path });
    return res.json(product);
  }
}

export default new ProductController();
