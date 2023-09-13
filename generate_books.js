const fs = require("fs");

const faker = require("faker");
const { ge } = require("faker/lib/locales");

class Book {
  constructor(bookId, genre, price) {
    this.bookId = bookId;
    this.genre = genre;
    this.price = price;
  }
}

function generateRandomBook(bookId) {
  const genre = faker.random.arrayElement([
    "Fiction",
    "Mystery",
    "Science Fiction",
    "Fantasy",
    "Romance",
    "Thriller",
  ]);
  const price = faker.finance.amount(5, 30, 2);
  return {
    bookId,
    genre,
    price,
  };
}

const bookList = new Array();

for (let i = 1; i <= 100; i++) {
  const book = new Book(
    generateRandomBook(i).bookId,
    generateRandomBook(i).genre,
    +generateRandomBook(i).price
  );
  bookList.push(book);
}

const jsonContent = JSON.stringify(bookList, null, 2);
fs.writeFileSync("random_books.json", jsonContent);
