const Transaction = require("./Transaction");

describe("Transaction", () => {
  test("it should create a new transaction object with the correct properties", () => {
    const amount = 100;
    const type = "credit";
    const transaction = new Transaction(amount, type);

    expect(transaction.amount).toBe(amount);
    expect(transaction.type).toBe(type);
    expect(transaction.date).toBeInstanceOf(Date);
  });
});