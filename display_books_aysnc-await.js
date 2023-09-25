let BookData = [];

const insertDataInHtml = (data) => {
  data.sort((a, b) => a.price - b.price);
  const tableBody = document.getElementById('table-all-books');
  tableBody.innerHTML = '';
  const mainRow = document.createElement('tr');
  mainRow.innerHTML = `
    <th>BookId</th>
    <th>Genre</th>
    <th>Price</th>
    <th>Examine</th>
   `;
  tableBody.appendChild(mainRow);
  data.forEach((book) => {
    const row = document.createElement('tr');
    row.innerHTML = `
       <th>${book.bookId}</th>
       <th>${book.genre}</th>
       <th>${book.price}</th>
      `;
    tableBody.appendChild(row);
  });
};

const fetchBookData = async () => {
  try {
    const response = await fetch('random_books.json');
    BookData = await response.json();
    insertDataInHtml(BookData);
  } catch (error) {
    console.log('Error in Fetching data', error);
  }
};
fetchBookData();

const searchByIdButton = (evt) => {
  evt.preventDefault();
  const idValue = document.getElementById('input-search-id').value;
  if (!idValue.trim().length) return;
  const matchingBooks = BookData.filter(
    (book) => book.bookId.toString() === idValue,
  );
  insertDataInHtml(matchingBooks);
};

const searchByGenreButton = (evt) => {
  evt.preventDefault();
  const genreValue = document.getElementById('input-search-genre').value;
  if (!genreValue.trim().length) return;
  const matchingBooks = BookData.filter(
    (book) => book.genre.toString() === genreValue,
  );
  insertDataInHtml(matchingBooks);
};

const searchByPriceButton = (evt) => {
  evt.preventDefault();
  const priceValue = document.getElementById('input-search-price').value;
  if (!priceValue.trim().length) return;
  const matchingBooks = BookData.filter(
    (book) => book.price.toString() === priceValue,
  );
  insertDataInHtml(matchingBooks);
};

document.getElementById('btn-search-id').addEventListener('click', searchByIdButton);
document.getElementById('btn-search-genre').addEventListener('click', searchByGenreButton);
document.getElementById('btn-search-price').addEventListener('click', searchByPriceButton);
