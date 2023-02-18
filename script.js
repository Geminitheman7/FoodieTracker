// Get the form element
const form = document.querySelector('form');

// Listen for the form submission
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the location and cuisine inputs
  const location = document.querySelector('input[type="text"]:first-of-type').value;
  const cuisine = document.querySelector('input[type="text"]:last-of-type').value;

  // Use the inputs to perform a search
  searchRestaurants(location, cuisine);
});

// Function to search for restaurants
function searchRestaurants(location, cuisine) {
  // Code to search for restaurants goes here
  console.log(`Searching for restaurants in ${location} that serve ${cuisine}`);
}

