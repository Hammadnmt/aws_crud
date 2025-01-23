const { Book } = require("../models/Book");

exports.getBooks = async (event) => {
  try {
    const data = await Book.findAll({});
    if (data.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "No books found" }),
      };
    } else {
      return { statusCode: 200, body: JSON.stringify(data) };
    }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
