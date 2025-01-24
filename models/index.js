const { sequelize } = require("../config/dbconnection");
const { DataTypes } = require("sequelize");

const Book = sequelize.define("Book", {
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Genre: {
    type: DataTypes.STRING,
  },
});

// Author model
const Author = sequelize.define("Author", {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Biography: {
    type: DataTypes.TEXT,
  },
});

// Junction table (BookAuthor)
const BookAuthor = sequelize.define("BookAuthor", {
  role: {
    type: DataTypes.STRING, // e.g., 'Primary Author', 'Co-Author'
  },
});

// Establish the associations
Book.belongsToMany(Author, { through: BookAuthor });
Author.belongsToMany(Book, { through: BookAuthor });

module.exports = {
  Book,
  Author,
  BookAuthor,
};
