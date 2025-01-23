const { Book } = require("../models/Book");
const { Author } = require("../models/Author");

exports.getBooksByAuthor = async (event, context) => {
  const author = await Author.findByPk(event.pathParameters.authorId);
  if (author == null) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Author not found" }),
    };
  }
  const books = await Book.findAll({ where: { AuthorId: author.AuthorId } });
  return {
    statusCode: 200,
    body: JSON.stringify(books),
  };
};

exports.getAuthorsByBook = async (event, context) => {
  const book = await Book.findByPk(event.pathParameters.bookId);

  if (!book) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Book not found" }),
    };
  }
  const authors = await Author.findAll({ where: { Name: book.Author } });

  return {
    statusCode: 200,
    body: JSON.stringify(authors),
  };
};
