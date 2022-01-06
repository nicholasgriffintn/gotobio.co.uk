'use strict';

module.exports = (sequelize, DataTypes, Model) => {
  class users extends Model {
    static associate(models) {}
  }
  users.init(
    {},
    {
      sequelize,
      modelName: 'users',
      freezeTableName: true,
    }
  );
  return users;
};
