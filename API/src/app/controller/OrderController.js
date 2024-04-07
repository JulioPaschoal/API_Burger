// CONF. MODULES \\
import * as Yup from 'yup';
import Product from '../models/Product';
import Category from '../models/Category';
import Order from '../schemas/Order';
import User from '../models/User';

// CONF. ORDERCONTROLLER \\
class OrderController {
  // ROTA DE CADASTRO DE ORDERS \\
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
      status: 'Pedido realizado',
    };

    // GRAVANDO DADOS NO BANCO \\
    const orderRes = await Order.create(order);
    return res.status(201).json(orderRes);
  }

  // ROTA DE LISTA TODAS AS ORDERS \\
  async index(req, res) {
    const order = await Order.find();
    return res.status(201).json(order);
  }

  // ROTA DE ATUALIZAR STATUS DO PEDIDO \\
  async update(req, res) {
    // VALIDANDO DADOS ENVIADO \\
    const schema = Yup.object().shape({
      status: Yup.string('Campo status é obrigatório!').required(
        'Campo status é obrigatório!',
      ),
    });
    try {
      await schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    // VERICANDO SE È UM ADMINISTRADOR \\
    const { admin: isAdmin } = await User.findByPk(req.userId);
    if (!isAdmin) {
      return res.status(401).json({ message: 'Acesso não Permitido' });
    }

    // PEGANDO O ID \\
    const { id } = req.params;
    const { status } = req.body;

    // ATUALIZAR STATUS NO BANCO \\
    try {
      await Order.updateOne({ _id: id }, { status });
    } catch (error) {
      return res.status(400).json({ error: 'Id não encontrado no banco' });
    }
    return res.status(200).json({ message: 'Status atualizado com sucesso' });
  }
}

export default new OrderController();
