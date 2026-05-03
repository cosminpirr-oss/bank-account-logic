/**
 * Clasa BankAccount gestionează operațiunile bancare de bază.
 * Demonstrează utilizarea conceptelor de programare orientată pe obiect (OOP).
 */
class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  /**
   * Depunere bani în cont
   * @param {number} amount 
   */
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push({ 
        type: "deposit", 
        amount: amount, 
        date: new Date().toLocaleString() 
      });
      return `Succes: Depunere de $${amount}. Sold nou: $${this.balance}`;
    }
    return "Eroare: Suma trebuie să fie mai mare decât zero.";
  }

  /**
   * Retragere bani din cont
   * @param {number} amount 
   */
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({ 
        type: "withdraw", 
        amount: amount, 
        date: new Date().toLocaleString() 
      });
      return `Succes: Retragere de $${amount}. Sold nou: $${this.balance}`;
    }
    return "Eroare: Fonduri insuficiente sau sumă invalidă.";
  }

  checkBalance() {
    return `Sold curent: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions
      .filter(t => t.type === "deposit")
      .map(t => `$${t.amount}`);
    return deposits.length > 0 ? `Depuneri: ${deposits.join(", ")}` : "Nicio depunere.";
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(t => t.type === "withdraw")
      .map(t => `$${t.amount}`);
    return withdrawals.length > 0 ? `Retrageri: ${withdrawals.join(", ")}` : "Nicio retragere.";
  }
}

// --- Testare Logică ---
const myAccount = new BankAccount();

console.log(myAccount.deposit(200)); 
console.log(myAccount.deposit(150)); 
console.log(myAccount.withdraw(50));  
console.log(myAccount.withdraw(30));  
console.log(myAccount.deposit(20));  

console.log("-----------------------");
console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());