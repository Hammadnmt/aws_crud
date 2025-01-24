const { Book } = require("../models/Book");
const BookServices = require("../services/bookServices");

exports.createBook = async (event) => {
  try {
    const data = await BookServices.createBook(JSON.parse(event.body));
    if (!data) {
      return {
        statusCode: 400,
        message: "Failed to create book",
      };
    }
    return {
      statusCode: 201,
      body: data ? data : [],
      message: "Created Successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      message: "something went wrong",
    };
  }
};
