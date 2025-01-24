const { BookServices } = require("../services/bookServices");

exports.createBook = async (event) => {
  try {
    const data = await BookServices.createBook(JSON.parse(event.body));
    // console.log(data);
    if (!data) {
      return {
        statusCode: 400,
        Headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Failed to create book" }),
      };
    }
    return {
      statusCode: 201,
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error }) };
  }
};

exports.getAllBooks = async (event) => {
  try {
    const data = await BookServices.getAllBooks();
    if (data.length == 0) {
      return {
        statusCode: 404,
        // Headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "No Books Found" }),
      };
    }
    return {
      statusCode: 200,
      // header: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error }) };
  }
};
exports.getBooksByAuthorId = async (event) => {
  try {
    const bookByAuthors = await BookServices.getBookByAuthor(
      event.pathParameter.id
    );
    if (bookByAuthors.length == 0) {
      return {
        statusCode: 404,
        header: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "No Books Found" }),
      };
    }
    return {
      statusCode: 200,
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(bookByAuthors),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error }) };
  }
};
