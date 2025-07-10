import { useEffect, useState } from "react";
import { fetchWalletBalance, fetchTransactions } from "../services/mockApi";

export default function UserDashboard() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchWalletBalance().then(setBalance);
    fetchTransactions().then(setTransactions);
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      <p>Wallet Balance: ${balance}</p>
      <h3>Recent Transactions</h3>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.id}>
            {tx.date}: {tx.amount > 0 ? "+" : ""}${tx.amount}
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => { e.preventDefault(); alert("Transaction sent!"); }}>
        <input type="number" placeholder="Amount" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}