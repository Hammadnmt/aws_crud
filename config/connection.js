const { sequelize } = require("./dbconnection");
async function connect() {
  try {
    await sequelize.authenticate();Book_Author
    console.log("Successfully Connected");
  } catch (error) {
    console.warn("Unable to connect to the database:", error);
  }
}
connect();
