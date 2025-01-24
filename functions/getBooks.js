const { Book } = require("../models/Book");

exports.getBooks = async (event) => {
  try {
    const data = await Book.findAll();
    if (data.length === 0) {
      return {
        statusCode: 204,
        message: "No books found",
      };
    }
    return {
      statusCode: 200,
      body: data ? JSON.stringify(data) : [],
    };
  } catch (error) {
    return {
      statusCode: 500,
      message: "something went wrong",
    };
  }
};
