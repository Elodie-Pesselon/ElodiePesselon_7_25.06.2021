'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.Comment)
    }
  };
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};