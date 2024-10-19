// Declare customerName in global scope
var customerName = 'bob';

// Modify customerName to uppercase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Set best customer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Overwrite best customer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Attempt to change leastFavoriteCustomer (will fail)
const leastFavoriteCustomer = 'someone else';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob'; // This will throw an error
}