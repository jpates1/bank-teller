class Transaction {
  constructor(amount, type) {
    this.amount = amount;
    this.type = type;
    this.date = new Date();
  }
}

module.exports = Transaction;