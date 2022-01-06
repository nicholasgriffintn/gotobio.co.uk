import config from "./config";
import db from "./models";

module.exports = {
  config,
  models: db.models,
  Sequelize: db.Sequelize,
  sequelize: db.sequelize,
};
