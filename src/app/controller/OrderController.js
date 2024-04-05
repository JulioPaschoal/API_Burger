// CONF. MODULES \\
import * as Yup from 'yup';
import Product from '../models/Product';
import Category from '../models/Category';

// CONF. ORDERCONTROLLER \\
class OrderController {
  async store(req, res) {
    // VALIDANDO DADOS ENVIADO \\
    const schema = Yup.object().shape({
      products: Yup.array()
        .required()
        .of(
          Yup.object().shape({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
          }),
        ),
    });
    try {
      await schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    // CRIANDO OBJETO USER PRA ENVIAR PRO MONGODB \\
    const productId = req.body.products.map((product) => product.id);
    // ARMAZENANDO OS PRODUTOS \\
    const updateProducts = await Product.findAll({
      where: {
        id: productId,
      },
      include: [{ model: Category, as: 'category', attributes: ['name'] }],
    });

    // EDITANDO PRODUCTS PRA SALVAR DO BANCO \\
    const editedProduct = updateProducts.map((product) => {
      // PEGANDO A QUANTIDADE DE PRODUTOS \\
      const productIndex = req.body.products.findIndex(
        (reqProduct) => reqProduct.id === product.id,
      );

      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category.name,
        url: product.url,
        quantity: req.body.products[productIndex].quantity,
      };
      return newProduct;
    });

    // CRIANDO OBJETO USER PRA ENVIAR PRO MONGODB \\
    const order = {
      user: {
        id: req.userId,
        name: req.userName,
      },
      products: editedProduct,
    };

    return res.status(201).json(editedProduct);
  }
}

export default new OrderController();
