let myLibrary = JSON.parse(localStorage.getItem('book-library-data')) || [];
const saveData = (arr) => {
  localStorage.setItem('book-library-data', JSON.stringify(arr));
};

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

function addBookToLibrary() {
  const bookName = form['book-name'].value;
  const authorName = form['author-name'].value;
  const pages = form['no-of-pages'].value;
  const readBook = form['read-status'].value;

  readStatus = readBook === 'yes' ? true : false;

  const book = new Book(bookName, authorName, pages, readStatus);

  myLibrary.push(book);

  form.reset();

  saveData(myLibrary);

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
  saveData(myLibrary);
  render();
};

const toggleRead = (idx) => {
  myLibrary[idx].switchStatus();
};

const library__tbody = document.getElementById('library');
const newBook__button = document.getElementById('new-book');
const modal = document.getElementById('myModal');
const form = modal.querySelector('form');

render();

const toggleModal = () => {
  modal.classList.toggle('show-model');
};

const windowOnClick = (e) => {
  if (e.target === modal) toggleModal();
};

newBook__button.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  toggleModal();
  addBookToLibrary();
});
