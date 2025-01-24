const { Book } = require("../models/Book");

exports.updateBook = async (event) => {
  const { id: BookId } = event.pathParameters;
  const { body } = event;
  try {
    const parsedBody = JSON.parse(body);
    const updateddata = await Book.update(
      {
        Author: parsedBody.Author,
        Title: parsedBody.Title,
      },
      {
        where: {
          id: BookId,
        },
      }
    );
    if (updateddata[0] === 0) {
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
    return {
      statusCode: 500,
      message: "something went wrong",
    };
  }
};
