let myLibrary = [];

let dummyData = [
  {
    title: 'The Hobbit',
    author: 'J.R.R.Tolkien',
    pages: 295,
    read: false,
  },
  {
    title: 'Harry Potter',
    author: 'J.K.Rowling',
    pages: 400,
    read: true,
  },
  {
    title: 'The Lord of the rings',
    author: 'J.R.R.Tolkien',
    pages: 900,
    read: true,
  },
];
myLibrary.push(...dummyData);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

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
            <td><button onclick=removeBook(${idx})>Remove</button</td>
        </tr>
    `;
    })
    .join('');
}

const removeBook = (index) => {
  myLibrary.splice(index, 1);
  render();
};

const library__tbody = document.getElementById('library');
const newBook__button = document.getElementById('new-book');

render();

newBook__button.addEventListener('click', addBookToLibrary);
