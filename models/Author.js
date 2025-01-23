const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnection");

exports.Author = sequelize.define("Authors", {
  author_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  author_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
