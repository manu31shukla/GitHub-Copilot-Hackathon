// Get the input fields 
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const transactionList = document.getElementById('transaction-list');

console.log(descriptionInput);
// Create an array to store transactions
let transactions = [];

// Function to add a transaction
function addTransaction() {
    // Get the values from the input fields
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    // Validate the input
  if (description.trim() === '' || isNaN(amount)) {
    alert('Please enter a valid description and amount.');
    return;
  }
   // Create a new transaction object
   const transaction = {
    description,
    amount
  };

  // Add the transaction to the array
  transactions.push(transaction);

  // Clear the input fields
  descriptionInput.value = '';
  amountInput.value = '';

  // Render the updated transaction list
  renderTransactionList();
}

// Function to render the transaction list
function renderTransactionList() {
    // Clear the transaction list
    transactionList.innerHTML = '';
  
    // Loop through the transactions and create list items
    for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];
  
      // Create a list item element
      const listItem = document.createElement('li');
  
      // Set the text content of the list item
      listItem.textContent = `${transaction.description}: $${transaction.amount.toFixed(2)}`;
  
      // Append the list item to the transaction list
      transactionList.appendChild(listItem);
    }
  }
  