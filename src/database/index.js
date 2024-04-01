// CONF. MODULES \\
import Sequelize from 'sequelize';
import configDatabase from '../config/database';
import User from '../app/models/User';
import Product from '../app/models/Product';

// IMPORT MODELS \\
const models = [User, Product];

// CONF. CONECTAR COM BANCO \\
class Database {
  constructor() {
    this.init();
  }

  // CONF. MOTODO
  init() {
    this.connection = new Sequelize(configDatabase);
    models.map((model) => model.init(this.connection));
  }
}
export default new Database();
