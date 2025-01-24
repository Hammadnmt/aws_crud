const BookServices = require("../services/bookServices");

exports.deleteBook = async (event) => {
  try {
    const data = await BookServices.deleteBook(event.pathParameters.id);
    if (data === 0) {
      return {
        statusCode: 404,
        message: "Book not found",
      };
    }
    return {
      statusCode: 200,
      message: "Book deleted",
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      message: "something went wrong",
    };
  }
};
