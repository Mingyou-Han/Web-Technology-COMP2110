
// a list of book objects
let allBooks = [];

// a function to generate a display of all of the books
// in an array list format.
const renderBooks = (bookArray) => {
    const target = document.getElementById('content');  // Selects the HTML element where the books will be displayed.
    let content = "<ul>"; // Starts an unordered list for the book items.
    for (let i = 0; i < bookArray.length; i++) { // Loops through each book in the array.
        const book = bookArray[i];  // Gets the current book object.
        content += `<li>${book.title} by <em>${book.author}</em>` // Adds a list item for each book with title and author.
    };
    content += "</ul>"; // Closes the unordered list.
    target.innerHTML = content; // Inserts the list into the selected HTML element.
  };
  
  // Defines a function to render books in a grid format.
  const renderBookGrid = (bookArray) => {  // Selects the HTML element where the books will be displayed.
    const target = document.getElementById('content');  
    let content = '<div class="book-grid">';// Starts a div with a class for styling the grid.
    for (let i = 0; i < bookArray.length; i++) { // Loops through each book in the array.
        const book = bookArray[i];// Gets the current book object.
        content += `<div class="book">
            <h3>${book.title}</h3>   // Adds a div for each book with its title, cover image, and other details.
            <img src="${book.imageLink}" alt="book cover">
            <dl class="book-description">
                <dt>Author</dt><dd>${book.author}</dd>
                <dt>Country</dt><dd>${book.country}</dd>
            </dl>
            </div>`
    };
    content += "</div>"; // Closes the grid div.
    target.innerHTML = content; // Inserts the grid into the selected HTML element.
  };
  
  // global variable to record which view is current
  let display = "list";
  
  // an event handler for the control button
  document.getElementById('control').onclick = (event) => {
    console.log('control button clicked'); // Logs a message when the button is clicked.
    if (display === "list") {   // Checks if the current display mode is list.
        display = "grid"; // switch case    
    } else {
        display = "list"; //switch case 2
    }
    render(); // Calls the render function to update the display based on the new mode.
  };
  
  const render = () => {
    if (display === 'grid') {
        renderBookGrid(allBooks.books); //^^^ renderBookGrid function is call and used
    } else {
        renderBooks(allBooks.books);  //^^^ renderBookGrid function is call and used
    }
  }
  
  // load the data via fetch and store in the global variable
  // then call render to draw the page.
  // Defines a function to load book data from a JSON file and then render the page.
  const loadData = () => {
    fetch('books.json')  // Initiates a fetch request to get the book data.
    .then(response => response.json()) // Parses the response to JSON.
    .then(data => {
        allBooks = data;  // Stores the fetched data in a global variable. Used later
        render();
    })
  }
  // Adds an event listener that calls loadData when the window is fully loaded.
  window.onload = () => {
    loadData(); // Calls the function to load and render book data.
  };
  