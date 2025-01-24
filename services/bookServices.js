const { Author, Book } = require("../models/index");

exports.BookServices = {
  getAllBooks: async () => {
    try {
      const books = await Book.findAll();
      return books;
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  },
  getBookById: async (bookId) => {
    try {
      const book = await Book.findByPk(bookId);
      if (!book) {
        throw new Error("Book not found");
      }
      return book;
    } catch (error) {
      console.error("Error fetching book:", error);
      throw error;
    }
  },
  createBook: async (data) => {
    let bookdata = {
      Title: data.Title,
      Genre: data.Genre,
    };
    let authordata = {
      Name: data.Name,
      Biography: data.Biography,
    };
    try {
      const book = await Book.create(bookdata);
      const author = await Author.create(authordata);
      await book.addAuthor(author);
      console.log(book);
      return book;
    } catch (error) {
      throw error;
    }
  },
  updateBook: async (bookId, updatedBookData) => {
    try {
      const book = await Book.findByPk(bookId);
      if (!book) {
        throw new Error("Book not found");
      }
      await book.update(updatedBookData);
      return book;
    } catch (error) {
      throw error;
    }
  },
  deleteBook: async (bookId) => {
    try {
      const book = await Book.findByPk(bookId);
      if (!book) {
        throw new Error("Book not found");
      }
      await book.destroy();
      return book;
    } catch (error) {
      throw error;
    }
  },
  getBookByAuthor: async (authorId) => {
    try {
      const books = await Book.findAll({
        include: [{ model: Author, where: { id: authorId } }],
      });
      return books;
    } catch (error) {
      throw error;
    }
  },
};
