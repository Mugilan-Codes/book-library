let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () =>
    `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`;
}

const theHobbit = new Book('The Hobbit', 'J.R.R.Tolkien', 295, false);
const lotr = new Book('The Lord of the rings', 'J.R.R.Tolkien', 900, true);
myLibrary.push(theHobbit, lotr);

function addBookToLibrary() {
  const bookName = prompt('Enter the name of the book');
  const authorName = prompt('Enter the name of the author');
  const pages = Number(prompt('Number of pages'));
  const readBook = Boolean(prompt('Have you read the book'));

  const book = new Book(bookName, authorName, pages, readBook);

  myLibrary.push(book);
}

function render(arr) {
  arr.map((book) => {
    console.log(book.title);
  });
}

const library__tbody = document.getElementById('library');
console.log(library__tbody);

render(myLibrary);
