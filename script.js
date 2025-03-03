// Get the DOM elements by their IDs and store them in variables
let incrementEl = document.getElementById("increment-el"); // Button or element for incrementing the counter
let countEl = document.getElementById("counter-el"); // Element that displays the current count
let decrementEl = document.getElementById("decrement-el"); // Button or element for decrementing the counter
let listEl = document.getElementById("list-el"); // List element where the saved counts will be displayed
let resetEl = document.getElementById("reset-el"); //

let count = 0; // Initialize the counter to 0

// Function to increment the counter
function incrementPlus() {
  count++; // Increase the count by 1
  console.log(count); // Log the updated count to the console
  countEl.innerText = count; // Update the displayed count on the webpage
}

// Function to decrement the counter
function decrementSub() {
  count--; // Decrease the count by 1
  console.log(count); // Log the updated count to the console
  countEl.innerText = count; // Update the displayed count on the webpage
}

// Function to save the current count to a list and reset the counter
function save() {
  // Create a new list item (<li>) element to store the count value
  let li_EL = document.createElement("li");

  // Set the inner text of the list item to the current value of the count
  li_EL.innerText = count;

  // Append the new <li> item to the list element on the page
  listEl.append(li_EL);

  // Reset the count to 0 after saving it
  count = 0;

  // Update the count display to show the reset value (0)
  countEl.innerText = count;
}

function reset() {
  // Clear all saved count items from the list
  listEl.innerHTML = ''; // This will remove all <li> items from the list
}
