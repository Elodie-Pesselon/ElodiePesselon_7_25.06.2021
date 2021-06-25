'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      // define association here
    }
  };
  Comment.init({
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },    
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    post_id:{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};