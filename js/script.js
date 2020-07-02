let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.switchStatus = function () {
  this.read = !this.read;
  render();
};

let dummyData = [
  new Book('The Hobbit', 'J.R.R.Tolkien', 295, false),
  new Book('Harry Potter', 'J.K.Rowling', 400, true),
  new Book('The Lord of the rings', 'J.R.R.Tolkien', 900, true),
];
myLibrary.push(...dummyData);

function addBookToLibrary() {
  const bookName = prompt('Enter the name of the book');
  const authorName = prompt('Enter the name of the author');
  const pages = Number(prompt('Number of pages'));
  const readBook = Boolean(prompt('Have you read the book'));

  const book = new Book(bookName, authorName, pages, readBook);

  myLibrary.push(book);

  render();
}

function render(arr = myLibrary) {
  library__tbody.innerHTML = arr
    .map((book, idx) => {
      return `
        <tr data-book=${idx}>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.read}</td>
            <td><button onclick=removeBook(${idx})>Remove</button></td>
            <td><button onclick=toggleRead(${idx})>Toggle Read</button></td>
        </tr>
    `;
    })
    .join('');
}

const removeBook = (index) => {
  myLibrary.splice(index, 1);
  render();
};

const toggleRead = (idx) => {
  myLibrary[idx].switchStatus();
};

const library__tbody = document.getElementById('library');
const newBook__button = document.getElementById('new-book');

render();

newBook__button.addEventListener('click', addBookToLibrary);
