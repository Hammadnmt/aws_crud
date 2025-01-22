const { sequelize } = require("../config/dbconnection");
const { DataTypes } = require("sequelize");

exports.Book = sequelize.define("Book", {
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
