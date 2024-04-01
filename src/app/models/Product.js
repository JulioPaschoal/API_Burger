// CONF. MODULES \\
import Sequelize, { Model } from 'sequelize';

// CONF. PRODUCTS \\
class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.INTEGER,
        category: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

export default Product;
