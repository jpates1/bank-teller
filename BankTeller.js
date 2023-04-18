class BankTeller{
  constructor(){
    this.transactions = [];
    this.balance = 0;
  }

  deposit(cash){
    this.addTransaction(cash, null);
  }

  printStatement() {
    let credit = 0;
    this.transactions.forEach((transaction) => {
      if (transaction.credit) {
        credit += transaction.credit;
      }
    });
    return ` || ${credit.toFixed(2)} || || ${credit.toFixed(2)}\n`;
  }

  addTransaction(credit, debit){

    this.transactions.push({
      credit: credit,
      debit: debit,
    });
  };

}

module.exports = BankTeller;

