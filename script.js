// Get the form element
const form = document.querySelector('form');

// Get the currency select element
const currencySelect = document.querySelector('#currency');

// Set the default currency
let currency = localStorage.getItem('currency') || 'USD';

// Set the selected option for the currency select element
currencySelect.value = currency;

// Listen for the form submission
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Save the selected currency to local storage
  currency = currencySelect.value;
  localStorage.setItem('currency', currency);

  // Display a message to the user
  alert(`Currency set to ${currency}`);
});
