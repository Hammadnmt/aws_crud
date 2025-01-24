const { Author } = require("../models/index");

const AuthorServices = {
  getAllAuthors: async () => {
    try {
      const authors = await Author.findAll();
      return authors;
    } catch (error) {
      console.error("Error fetching authors:", error);
      throw error;
    }
  },
  getAuthorById: async (authorId) => {
    try {
      const author = await Author.findByPk(authorId);
      if (!author) {
        throw new Error("Author not found");
      }
      return author;
    } catch (error) {
      console.error("Error fetching author:", error);
      throw error;
    }
  },
  createAuthor: async (authordata) => {
    try {
      const author = await Author.create(authorData);
      await author.addAuthor(author);
    } catch (error) {
      console.error("Error creating author:", error);
      throw error;
    }
  },
  updateAuthor: async (authorId, updatedAuthorData) => {
    try {
      const author = await Author.findByPk(authorId);
      if (!author) {
        throw new Error("Author not found");
      }
      await author.update(updatedAuthorData);
      return author;
    } catch (error) {
      console.error("Error updating author:", error);
      throw error;
    }
  },
  deleteAuthor: async (authorId) => {
    try {
      const author = await Author.findByPk(authorId);
      if (!author) {
        throw new Error("Author not found");
      }
      await author.destroy();
      return author;
    } catch (error) {
      console.error("Error deleting author:", error);
      throw error;
    }
  },
  getAuthorByAuthor: async (authorId) => {
    try {
      const authors = await Author.findAll({
        include: [{ model: Author, where: { id: authorId } }],
      });
      return authors;
    } catch (error) {
      console.error("Error fetching authors by author:", error);
      throw error;
    }
  },
};
