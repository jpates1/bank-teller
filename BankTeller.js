class BankTeller{
  constructor(){
    this.transactions = [];
    this.balance = 0;
  }

  deposit(cash){
    this.addTransaction(cash, null);
  }

  withdraw(cash){
    this.addTransaction(null, cash);
  }

  printStatement() {
    let statement = this.transactions.slice().map((transaction) => {
      let credit = transaction.credit ? `${transaction.credit.toFixed(2)} ` : '';
      let debit = transaction.debit ? `${transaction.debit.toFixed(2)} ` : '';      
      let balance = transaction.balance.toFixed(2);
      return ` || ${credit}|| ${debit}|| ${balance}\n`;
    });
    return statement.join('');
  }

  addTransaction(credit, debit){
    if ((credit && credit <= 0) || (debit && debit <= 0)) {
      throw new Error("Amount must be positive");
    }
    if (debit && debit > this.balance) {
      throw new Error("Insufficient balance");
    }

    this.transactions.push({
      credit: credit,
      debit: debit,
      balance: this.balance + (credit || 0) - (debit || 0)
    });

    this.balance = this.transactions[this.transactions.length - 1].balance;
  };

}

module.exports = BankTeller;

