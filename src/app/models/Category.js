// CONF. MODULES \\
import Sequelize, { Model } from 'sequelize';

// CONF. CATEGORY \\
class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

export default Category;
