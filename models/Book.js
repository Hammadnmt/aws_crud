const { sequelize } = require("../config/dbconnection");
const { DataTypes } = require("sequelize");

exports.Book = sequelize.define("Books", {
  book_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  book_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  book_genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Authors",
      key: "author_id",
    },
  },
});
