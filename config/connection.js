const { sequelize } = require("../config/dbconnection");
async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Successfully Connected");
  } catch (error) {
    console.log(error);
  }
}
connect();
