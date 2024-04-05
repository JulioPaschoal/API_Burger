// CONF. MODULES \\
import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import configDatabase from '../config/database';
import User from '../app/models/User';
import Product from '../app/models/Product';
import Category from '../app/models/Category';

// IMPORT MODELS \\
const models = [User, Product, Category];

// CONF. CONECTAR COM BANCO \\
class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  // CONF. MOTODO
  init() {
    this.connection = new Sequelize(configDatabase);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }

  // METODO MONGO \\
  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/codeburger',
      // {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // },
    );
  }
}
export default new Database();
