let books = [
  {
    title: "The Hobbit",
    author: " J.R.R Tolkien",
    maxPages: 200,
    onPage: 60,
  },
  {
    title: "Harry Potter ",
    author: " J.K Rowling",
    maxPages: 250,
    onPage: 150,
  },
  {
    title: "50 Shades of Grey ",
    author: " E.L James",
    maxPages: 150,
    onPage: 150,
  },
  {
    title: "Don Quixote",
    author: " Miguel de Cervantes",
    maxPages: 350,
    onPage: 300,
  },
  {
    title: "Hamlet",
    author: " William Shakespeare",
    maxPages: 550,
    onPage: 550,
  },
];

// first exercise
const ul = document.createElement("ul");

books.forEach((book) => {
  const li = document.createElement("li");
  li.innerText = `${book.title} by ${book.author}`;
  ul.append(li);
  document.body.append(ul);
});

// second exercise
const ul1 = document.createElement("ul");

books.forEach((book) => {
  const li = document.createElement("li");

  if (book.maxPages === book.onPage) {
    li.innerText = `You already read ${book.title} by ${book.author}`;
    li.style.color = "green";
  } else {
    li.innerText = `You still need to read ${book.title} by ${book.author}`;
    li.style.color = "red";
  }

  ul1.append(li);
  document.body.append(ul1);
});

// third exercise
const table = document.createElement("table");
const tr = document.createElement("tr");

const titleTh = document.createElement("th");
titleTh.innerText = "Title";
const authorTh = document.createElement("th");
authorTh.innerText = "Author";
const maxPagesTh = document.createElement("th");
maxPagesTh.innerText = "Max Pages";
const onPageTh = document.createElement("th");
onPageTh.innerText = "On page";
const progressTh = document.createElement("th");
progressTh.innerText = "Progress";

tr.append(titleTh, authorTh, maxPagesTh, onPageTh, progressTh);
table.append(tr);
document.body.append(table);

const createTable = () => {
  books.forEach((book) => {
    const tr1 = document.createElement("tr");

    const title1 = document.createElement("td");
    title1.innerText = book.title;
    tr1.append(title1);

    const author1 = document.createElement("td");
    author1.innerText = book.author;
    tr1.append(author1);

    const maxPages1 = document.createElement("td");
    maxPages1.innerText = book.maxPages;
    tr1.append(maxPages1);

    const onPage1 = document.createElement("td");
    onPage1.innerText = book.onPage;
    tr1.append(onPage1);

    const progress1 = document.createElement("td");
    const progressBarContainer = document.createElement("div");
    progressBarContainer.style.height = "30px";
    progressBarContainer.style.width = "100%";
    progressBarContainer.style.backgroundColor = "lightgray";
    progressBarContainer.style.border = "1px solid lightgray";

    const progressBar = document.createElement("div");
    progressBar.style.height = "100%";
    progressBar.style.width = `${(book.onPage / book.maxPages) * 100}%`;
    progressBar.style.backgroundColor = "green";
    progressBar.style.color = "white";
    progressBar.style.textAlign = "center";
    progressBar.style.lineHeight = "30px";
    progressBar.innerText = `${Math.floor(
      (book.onPage / book.maxPages) * 100
    )}%`;

    progressBarContainer.appendChild(progressBar);
    progress1.appendChild(progressBarContainer);
    tr1.append(progress1);

    table.append(tr1);
  });
};

createTable();

// fourth exercise
const h3 = document.createElement("h3");
h3.innerText = "Add a book to the list:";
h3.style = "margin-top: 40px";

const bookTitle = document.createElement("input");
bookTitle.placeholder = "Book Title";

const bookAuthor = document.createElement("input");
bookAuthor.placeholder = "Book Author";

const currentPage = document.createElement("input");
currentPage.placeholder = "Current Page";

const bookMaxPages = document.createElement("input");
bookMaxPages.placeholder = "Book Max Pages";

const btn = document.createElement("button");
btn.innerText = "Add to List";

document.body.append(h3, bookTitle, bookAuthor, currentPage, bookMaxPages, btn);

const clearBookData = () => {
  bookTitle.value = "";
  bookAuthor.value = "";
  currentPage.value = "";
  bookMaxPages.value = "";
};

btn.addEventListener("click", () => {
  if (
    bookTitle.value &&
    bookAuthor.value &&
    currentPage.value &&
    bookMaxPages.value
  ) {
    const newBook = {
      title: bookTitle.value,
      author: bookAuthor.value,
      maxPages: parseInt(bookMaxPages.value),
      onPage: parseInt(currentPage.value),
    };

    books = [];

    books.push(newBook);
    createTable();
    clearBookData();
  }
});
