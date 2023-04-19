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
    let header = "date || credit || debit || balance\n";
    let rows = this.transactions.slice().reverse().map((transaction) => {
      let date = transaction.date;
      let credit = transaction.credit ? `${transaction.credit.toFixed(2)} ` : '';
      let debit = transaction.debit ? `${transaction.debit.toFixed(2)} ` : '';      
      let balance = transaction.balance.toFixed(2);
      return ` ${date} || ${credit}|| ${debit}|| ${balance}\n`;
    });
    return header + rows.join('');
  }

  addTransaction(credit, debit){
    if ((credit && credit <= 0) || (debit && debit <= 0)) {
      throw new Error("Amount must be positive");
    }
    if (debit && debit > this.balance) {
      throw new Error("Insufficient balance");
    }

    this.transactions.push({
      date: new Date().toLocaleDateString(),
      credit: credit,
      debit: debit,
      balance: this.balance + (credit || 0) - (debit || 0)
    });

    this.balance = this.transactions[this.transactions.length - 1].balance;
  };

}

module.exports = BankTeller;


const teller = new BankTeller();

teller.deposit(1000);
teller.withdraw(500);
teller.deposit(2000);

console.log(teller.printStatement());