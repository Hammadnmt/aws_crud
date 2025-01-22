const { Book } = require("../models/Book");

exports.deleteBook = async (event) => {
  const { id: BookId } = event.pathParameters;
    try {
      data = await Book.destroy({
        where: {
          id: BookId,
        },
      });
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  return {
    statusCode: 200,
    message: "Book deleted",
  };
};
