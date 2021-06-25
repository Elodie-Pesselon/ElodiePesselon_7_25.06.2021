'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post); //option 2 : models.User.hasMany(models.Post)
      User.hasMany(models.Comment)
    }
  };
  User.init({
    pseudo: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique : true,
      isEmail: true
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    presentation: {
      type: Sequelize.TEXT,
      allowNull: true
  },
    fonction: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};