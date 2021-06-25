'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
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
      },
/*      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }*/
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};