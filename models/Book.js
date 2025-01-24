const { sequelize } = require("../config/dbconnection");
const { DataTypes } = require("sequelize");

exports.Book = sequelize.define("Books", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
