import { useEffect, useState } from "react";
import { fetchWalletBalance, fetchTransactions } from "../services/mockApi";

export default function UserDashboard() {
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const [wallet, txs] = await Promise.all([
        fetchWalletBalance(),
        fetchTransactions(),
      ]);
      setBalance(wallet);
      setTransactions(txs);
    };

    loadData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Transaction sent!");
  };

  return (
    <section>
      <h2>User Dashboard</h2>

      <div>
        <strong>Wallet Balance:</strong>{" "}
        {balance !== null ? `${balance} birr` : "Loading..."}
      </div>

      <h3>Recent Transactions</h3>
      {transactions.length > 0 ? (
        <ul>
          {transactions.map(({ id, date, amount }) => (
            <li key={id}>
              {date}: {amount > 0 ? "+" : ""}
              {amount} birr
            </li>
          ))}
        </ul>
      ) : (
        <p>No transactions found.</p>
      )}

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input type="number" placeholder="Amount" required />
        <button type="submit">Send</button>
      </form>
      <a href="Login=.jsx" class="btn-link">Login As</a>
    </section>
  );
}