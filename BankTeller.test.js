const BankTeller = require('./BankTeller');

describe ('BankTeller',() => {
  beforeEach(()=>{
    newAccount = new BankTeller();
  })

  describe('deposit', () => {
    it('adds a deposit transaction with a positive amount to the account', () => {
        newAccount.deposit(1000);
        expect(newAccount.printStatement()).toContain(' || 1000.00 || || 1000.00\n');
    });

    it('adds a deposit transaction with zero amount to the account', () => {
      newAccount.deposit(0);
      expect(newAccount.printStatement()).toContain(' || || || 0.00\n');
    });

    it('throws an error if the deposit amount is negative', () => {
      expect(() => newAccount.deposit(-100)).toThrow('Amount must be positive');
    });
  });

  describe('withdraw', () => {
    it('adds a withdrawal transaction with a positive amount to the account', () => {
      newAccount.deposit(1000);
      newAccount.withdraw(500);
      expect(newAccount.printStatement()).toContain(' || || 500.00 || 500.00\n');
    });

    it('adds a withdrawal transaction with zero amount to the account', () => {
      newAccount.deposit(1000);
      newAccount.withdraw(0);
      expect(newAccount.printStatement()).toContain(' || || || 1000.00\n');
    });

    it('throws an error if the withdrawal amount is greater than the account balance', () => {
      newAccount.deposit(1000);
      expect(() => newAccount.withdraw(1500)).toThrow('Insufficient balance');
    });

    it('throws an error if the withdrawal amount is negative', () => {
      newAccount.deposit(1000);
      expect(() => newAccount.withdraw(-100)).toThrow('Amount must be positive');
    });
  });
})
