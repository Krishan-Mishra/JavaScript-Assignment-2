let BookData = new Array();
fetch("random_books.json")
  .then((response) => response.json())
  .then((data) => {
    BookData = data;
    insertDataInHtml(BookData);
  })
  .catch((error) => console.log(error));

document.getElementById("btn-search-id").onclick = IdButton;
document.getElementById("btn-search-genre").onclick = genreButton;
document.getElementById("btn-search-price").onclick = priceButton;

function IdButton(event) {
  event.preventDefault();
  const idValue = document.getElementById("input-search-id").value;
  const matchingBooks = BookData.filter(
    (book) => book.bookId.toString() === idValue
  );
  insertDataInHtml(matchingBooks);
}

function genreButton(event) {
  event.preventDefault();
  const genreValue = document.getElementById("input-search-genre").value;
  const matchingBooks = BookData.filter(
    (book) => book.genre.toString() === genreValue
  );
  insertDataInHtml(matchingBooks);
}

function priceButton(event) {
  event.preventDefault();
  const priceValue = document.getElementById("input-search-price").value;
  const matchingBooks = BookData.filter(
    (book) => book.price.toString() === priceValue
  );
  insertDataInHtml(matchingBooks);
}

const insertDataInHtml = (data) => {
  data.sort((a, b) => a.price - b.price);
  const tableBody = document.getElementById("table-all-books");
  tableBody.innerHTML = "";
  let row = document.createElement("tr");
  row.innerHTML = `
  <th>BookId</th>
  <th>Genre</th>
  <th>Price</th>
  <th>Examine</th>
 `;
  tableBody.appendChild(row);
  data.forEach((book) => {
    let row = document.createElement("tr");
    row.innerHTML = `
     <th>${book.bookId}</th>
     <th>${book.genre}</th>
     <th>${book.price}</th>
    `;
    tableBody.appendChild(row);
  });
};
