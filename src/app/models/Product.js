// CONF. MODULES \\
import Sequelize, { Model } from 'sequelize';

// CONF. PRODUCTS \\
class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.INTEGER,
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
    return this;
  }

  // RELACIONANMENTO DE TABELA PRODUCTS E CATEGORY \\
  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  }
}

export default Product;
