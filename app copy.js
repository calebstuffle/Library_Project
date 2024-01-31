console.log("Hello World!\n==========\n");

// PROJECT Section

console.log("PROJECT:\n==========\n");

const books = [
  {
    id: 1,
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    read: true,
  },
];

class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor(books) {
    this.books = books;
    this.bookCount = books.length;
  }

  addBook() {
    // bookCount is initialized with "books.length" but only increases whenever the "addBook" function is called
    this.bookCount++;
    // Create a new book grabbing title, author, and book values from the html doc to use in JS//
    var title = document.getElementById("title");
    var author = document.getElementById("author");
    var read = document.getElementById("read");

    const newBook = new Book(
      this.bookCount,
      title.value,
      author.value,
      read.checked
    );

    //grab table body and add components//
    const tableBody = document.getElementById("tableBody");
    const newTr = document.createElement("tr");
    tableBody.appendChild(newTr);
    const newTitle = document.createElement("td");
    newTitle.textContent = title.value;
    newTr.appendChild(newTitle);
    const newAuthor = document.createElement("td");
    newAuthor.textContent = author.value;
    newTr.appendChild(newAuthor);
    const newRead = document.createElement("td");
    newTr.appendChild(newRead);
    //create new checkbox to attach to the "newRead" table data component
    const newCheckbox = document.createElement("input");
    newCheckbox.id = this.bookCount;
    newCheckbox.type = "checkbox";
    newCheckbox.checked = read.checked;
    newCheckbox.disabled = read.checked;
    newRead.appendChild(newCheckbox);

    tableBody.addEventListener("click", (event) => {
      this.markRead(event.target, event.target.id);
    });

    this.books.push(newBook);
  }
  //this function enables users to select and grey checkboxes after the initial entry
  markRead(checkbox, id) {
    this.books.forEach((book) => {
      if (id == book.id) {
        book.read = true;
        checkbox.disabled = true;
      }
    });
  }
}

const library = new Library(books);

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  library.addBook();
});
