import React, { useState } from "react";

function App() {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = (e) => {
    e.preventDefault();
    if (expense && amount) {
      setExpenses([...expenses, { expense, amount }]);
      setExpense("");
      setAmount("");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Finance Manager</h2>
      <form onSubmit={addExpense}>
        <input
          type="text"
          placeholder="Expense Name"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Add Expense</button>
      </form>

      <h3>Expense List</h3>
      <ul>
        {expenses.map((item, index) => (
          <li key={index}>
            {item.expense}: ₹{item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
