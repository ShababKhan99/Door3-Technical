const Sequelize = require('sequelize');
const { validate } = require('../db');
const db = require('../db');

const Book = db.define("book", {

  title: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
    allowNull: false,
  },

  year: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
    },
    allowNull: false,
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

module.exports = Book;