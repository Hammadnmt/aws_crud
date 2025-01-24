const BookServices = require("../services/bookServices");

exports.createBook = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);

    if (!requestBody.Title || !requestBody.Author) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: "Missing required fields: title or author",
        }),
      };
    }

    const data = await BookServices.createBook(requestBody);
    console.log("Created book:", data.dataValues);

    if (!data) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: "Failed to create book due to invalid input or server error",
        }),
      };
    }

    return {
      statusCode: 201,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data.dataValues),
    };
  } catch (error) {
    console.error("Error creating book:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "Internal Server Error: Unable to create book",
      }),
    };
  }
};
