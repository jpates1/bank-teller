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
  });

})
