"use strict";

const { Sequelize, DataTypes, Model } = require("sequelize");
const env = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : "development";
const configFile = require("../config").default;
const config = configFile[env];
const db: {
  sequelize: any;
  Sequelize: any;
  models: any;
} = {
  sequelize: null,
  Sequelize: null,
  models: null,
};

if (!config) {
  throw new Error("No config was found!");
}

let sequelize = config
  ? new Sequelize(config.database, config.username, config.password, config)
  : {};

const models = {
  projects: require("./providers")(sequelize, DataTypes, Model),
  experiments: require("./courses")(sequelize, DataTypes, Model),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.models = models;

export default db;
