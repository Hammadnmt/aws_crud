const { Book } = require("../models/Book");

const BookServices = {
  async getAllBooks() {
    return await Book.findAll();
  },
  async getBookById(id) {
    const data = await Book.findByPk(id);
  },
  async createBook(data) {
    const bookData = { id: data.id, Title: data.Title, Author: data.Author };
    return await Book.create(bookData);
  },
  async updateBook(bookData, id) {
    return await Book.update(bookData, { where: { id } });
  },
  async deleteBook(id) {
    const book = await Book.findByPk(id);
    if (!book) {
      return 0;
    }
    return await Book.destroy({ where: { id } });
  },
};
module.exports = BookServices;
