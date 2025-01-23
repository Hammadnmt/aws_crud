const { Book } = require("./Book");
const { Author } = require("./Author");
const { sequelize } = require("../config/dbconnection");

// Define associations
Book.belongsToMany(Author, {
  through: "Book_Author",
  foreignKey: "book_id",
});

Author.belongsToMany(Book, {
  through: "Book_Author",
  foreignKey: "author_id",
});

module.exports = {
  sequelize,
  Book,
  Author,
};
