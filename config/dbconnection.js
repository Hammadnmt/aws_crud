const { Sequelize } = require("sequelize");

exports.sequelize = new Sequelize("sampledb", "root", "password", {
  host: "192.168.100.9",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});
