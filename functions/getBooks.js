const BookServices = require("../services/bookServices");

exports.getBooks = async (event) => {
  try {
    console.log("Getting all books");
    const data = await BookServices.getAllBooks();
    if (data.length === 0) {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "No books found" }),
      };
    }
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "something went wrong" }),
    };
  }
};
