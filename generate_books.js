const fs = require('fs');
const faker = require('faker');

class Book {
  generateRandomBook(bookId) {
    const genre = faker.random.arrayElement([
      'Fiction',
      'Mystery',
      'Science Fiction',
      'Fantasy',
      'Romance',
      'Thriller',
    ]);
    const price = faker.finance.amount(5, 30, 2);
    this.bookId = bookId;
    this.genre = genre;
    this.price = price;
  }
}

const bookList = [];

for (let id = 1; id <= 100; id += 1) {
  const book = new Book();
  book.generateRandomBook(id);
  bookList.push(book);
}

const jsonContent = JSON.stringify(bookList, null, 2);
fs.writeFileSync('random_books.json', jsonContent);
