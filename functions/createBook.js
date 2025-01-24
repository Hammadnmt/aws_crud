const { BookServices } = require("../services/bookServices");

exports.createBook = async (event) => {
  try {
    const data = await BookServices.createBook(JSON.parse(event.body));
    if (!data) {
      return {
        statusCode: 400,
        header: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Failed to create book" }),
      };
    }
    return {
      statusCode: 201,
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify({ error: error }) };
  }
};
