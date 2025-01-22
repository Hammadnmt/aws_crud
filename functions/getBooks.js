const { Book } = require("../models/Book");

exports.getBooks = async (event) => {
  let data = {};
  try {
    data = await Book.findAll();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
  return {
    statusCode: 200,
    body: data ? JSON.stringify(data) : [],
  };
};
