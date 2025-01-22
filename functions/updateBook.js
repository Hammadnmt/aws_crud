const { Book } = require("../models/Book");

exports.updateBook = async (event) => {
    console.log(event)
  const { id: BookId } = event.pathParameters;
  const { body } = event;
  let parsedBody = JSON.parse(body);
  try {
    data = await Book.update(
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
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
  return {
    statusCode: 200,
    message: "Book update",
  };
};
