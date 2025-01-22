const { Book } = require("../models/Book");

exports.createBook = async (event) => {
  const { body } = event;
  let parsedBody = JSON.parse(body);
  let bookdata = {
    id: parsedBody.id,
    Title: parsedBody.Title,
    Author: parsedBody.Author,
  };
  try {
    // const bookInfo = JSON.stringify(bookdata);
    // console.log(bookdata);
    const data = await Book.create(bookdata);
  } catch (error) {
    console.log(error);
  }
  return {
    statusCode: 201,
    body: data ? data : [],
    message: "Created Successfully",
  };
};
