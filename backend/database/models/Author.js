const Sequelize = require('sequelize');
const db = require('../db');

const Author = db.define("author", {

  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
    allowNull: false
  },

  dob: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT
  },

  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },

  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }


});

module.exports = Author;