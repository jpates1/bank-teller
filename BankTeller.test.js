const BankTeller = require('./BankTeller');

describe ('BankTeller',() => {
  beforeEach(()=>{
    newAccount = new BankTeller();
  })

  describe('deposit', () => {
    it('adds a deposit transaction with a positive amount to the account', () => {
      const date = new Date('2023-01-14');
      jest.spyOn(global, 'Date').mockImplementation(() => date);

      newAccount.deposit(1000);
      expect(newAccount.printStatement()).toContain('14/01/2023 || 1000.00 || || 1000.00\n');
      
      global.Date.mockRestore();
    });

  //   it('adds a deposit transaction with zero amount to the account', () => {
  //     newAccount.deposit(0);
  //     expect(newAccount.printStatement()).toContain(' || || || 0.00\n');
  //   });

  //   it('throws an error if the deposit amount is negative', () => {
  //     expect(() => newAccount.deposit(-100)).toThrow('Amount must be positive');
  //   });
  });

  // describe('withdraw', () => {
  //   it('adds a withdrawal transaction with a positive amount to the account', () => {
  //     newAccount.deposit(1000);
  //     newAccount.withdraw(500);
  //     expect(newAccount.printStatement()).toContain(' || || 500.00 || 500.00\n');
  //   });

  //   it('adds a withdrawal transaction with zero amount to the account', () => {
  //     newAccount.deposit(1000);
  //     newAccount.withdraw(0);
  //     expect(newAccount.printStatement()).toContain(' || || || 1000.00\n');
  //   });

  //   it('throws an error if the withdrawal amount is greater than the account balance', () => {
  //     newAccount.deposit(1000);
  //     expect(() => newAccount.withdraw(1500)).toThrow('Insufficient balance');
  //   });

  //   it('throws an error if the withdrawal amount is negative', () => {
  //     newAccount.deposit(1000);
  //     expect(() => newAccount.withdraw(-100)).toThrow('Amount must be positive');
  //   });
  // });

  // describe('statement', () => {
  //   it('returns a statement with only the header when there are no transactions in the account', () => {
  //     expect(newAccount.printStatement()).toEqual('date || credit || debit || balance\n');
  //   });

  //   it('returns a statement with one transaction in the account', () => {
  //     newAccount.deposit(1000);
  //     expect(newAccount.printStatement()).toEqual('date || credit || debit || balance\n || 1000.00 || || 1000.00\n');
  //   });

  //   it('returns a statement with multiple transactions in the account, in different order than the provided acceptance criteria', () => {
  //     newAccount.deposit(1000);
  //     newAccount.withdraw(500);
  //     newAccount.deposit(2000);
  //     expect(newAccount.printStatement()).toContain(' || 2000.00 || || 2500.00\n');
  //     expect(newAccount.printStatement()).toContain(' || || 500.00 || 500.00\n');
  //     expect(newAccount.printStatement()).toContain(' || 1000.00 || || 1000.00\n');
  //   });
  // });
})
