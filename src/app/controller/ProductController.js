// CONF. MODULES \\
import * as Yup from 'yup';

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
    return res.json({ ok: true });
  }
}

export default new ProductController();
