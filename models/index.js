const { sequelize } = require("../config/dbconnection");

exports.Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
  },
});

// Author model
exports.Author = sequelize.define("Author", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  biography: {
    type: DataTypes.TEXT,
  },
});

// Junction table (BookAuthor)
exports.BookAuthor = sequelize.define("BookAuthor", {
  role: {
    type: DataTypes.STRING, // e.g., 'Primary Author', 'Co-Author'
  },
});

// Establish the associations
Book.belongsToMany(Author, { through: BookAuthor });
Author.belongsToMany(Book, { through: BookAuthor });

(async () => {
  try {
    await sequelize.sync({ force: true }); // Use `force: true` to reset tables during development
    console.log("Database synced successfully!");
  } catch (error) {
    console.error("Error syncing the database:", error);
  } finally {
    await sequelize.close();
  }
})();
