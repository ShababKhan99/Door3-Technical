// register models, set up associations between tables, and generate barrel file for the models;

const Book  = require('./Book');
const Author  = require('./Author');

Book.belongsTo(Author);
Author.hasMany(Book);

module.exports = {
  Book,
  Author
};