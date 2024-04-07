// CONF. MODULES \\
import Sequelize, { Model } from 'sequelize';

// CONF. CATEGORY \\
class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `https://localhost:3000/category-file/${this.path}`;
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

export default Category;
