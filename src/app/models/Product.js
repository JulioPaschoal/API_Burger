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
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `https://localhost:3000/product-file/${this.path}`;
          },
        },
      },
      {
        sequelize,
      },
    );
  }
}

export default Product;
