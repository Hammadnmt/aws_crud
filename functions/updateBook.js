const BookServices = require("../services/bookServices");

exports.updateBook = async (event) => {
  try {
    const updatebook = await BookServices.updateBook(
      JSON.parse(event.body),
      event.pathParameters.id
    );

    if (updatebook[0] === 0) {
      return {
        statusCode: 404,
        message: "Book not found",
      };
    }
    return {
      statusCode: 200,
      message: "Book updated",
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      message: "something went wrong",
    };
  }
};
