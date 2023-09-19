const fs = require('fs');
const faker = require('faker');

class Book {
  constructor() {
    this.bookList = [];
    this.genres = [
      'Fiction',
      'Mystery',
      'Science Fiction',
      'Fantasy',
      'Romance',
      'Thriller',
    ];
  }

  generateRandomBook() {
    for (let index = 1; index <= 100; index += 1) {
      this.bookList.push({
        bookId: index,
        price: Math.floor(Math.random()*1000),
        genre: this.genres[Math.floor(Math.random() * this.genres.length)],
      });
    }
  }
}

const book = new Book();
book.generateRandomBook();

const jsonContent = JSON.stringify(book.bookList, null, 2);
fs.writeFileSync('random_books.json', jsonContent);
