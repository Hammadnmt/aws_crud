const { Author, Book } = require("../models/index");

require("../models/index");

exports.createBook = async (event) => {
  const { body } = event;
  let parsedBody = JSON.parse(body);

  let bookdata = {
    book_title: parsedBody.book_title,
    book_genre: parsedBody.book_genre,
  };
  // console.log(bookdata);
  try {
    const author = await Author.create({ author_name: parsedBody.author_name });
    const book = await Book.create(bookdata);
    console.log(book);
    if (!book)
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Failed to create book" }),
      };
    if (!author)
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Sopmething went bad" }),
      };
    // console.log(author);
    await author.addBook(book);
    await book.addAuthor(author);
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Book created successfully",
      }),
    };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify({ error: error }) };
  }
};
