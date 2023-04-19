# BankTeller Program
The BankTeller program is a simple banking application that allows users to deposit, withdraw and print statements of their account transactions. This program is written in JavaScript and can be run on any compatible JavaScript environment.

## How to use
1. Clone or download the BankTeller repository to your local machine.
2. Navigate to the directory where the program is saved.
3. Open a terminal or command prompt in that directory.
4. Run 'node BankTeller.js' to start the program.
5. Use the 'deposit(cash)', 'deposit(cash)' & 'printStatement' methods.

## Program Overview
The BankTeller class contains the following methods:

### constructor()
Creates a new BankTeller object with an empty array of transactions and a balance of 0.

### deposit(cash)
Adds a new deposit transaction to the transactions array.

### withdraw(cash)
Adds a new withdrawal transaction to the transactions array.

### printStatement()
Prints out the account statement of all transactions in the transactions array, including the date, credit, debit, and balance for each transaction.

### addTransaction(credit, debit)
Adds a new transaction to the transactions array with the specified credit and debit amounts, as well as the current date and updated balance.

## Error Handling
The addTransaction(credit, debit) method performs some basic error checking to ensure that the user does not make invalid transactions. If the user tries to deposit or withdraw a negative amount, or if they try to withdraw more than their current balance, an error will be thrown.

## Example Usage
```js 
const teller = new BankTeller();

teller.deposit(1000);
teller.withdraw(500);
teller.deposit(2000);

console.log(teller.printStatement());
```
This code will create a new BankTeller object, make three transactions (depositing 1000, withdrawing 500, and depositing 2000), and print out the account statement for these transactions.

## Testing & Coverage
Tests and test coverage are all passing at 100% and can be viewed by running `npx jest --coverage`