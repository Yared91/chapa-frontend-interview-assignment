import { useEffect, useState } from "react";
import { fetchSystemStats } from "../services/mockApi";
import AdminDashboard from "./AdminDashboard";

export default function SuperAdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchSystemStats().then(setStats);
  }, []);

  return (
    <div>
      <h2>Super Admin Dashboard</h2>
      <AdminDashboard />
      <h3>System Stats</h3>
      <p>Total Payments: ${stats.totalPayments}</p>
      <p>Active Users: {stats.activeUsers}</p>
      <form onSubmit={(e) => { e.preventDefault(); alert("Admin added/removed!"); }}>
        <input placeholder="Admin Email" />
        <button type="submit">Add/Remove Admin</button>
      </form>
    </div>
  );
}