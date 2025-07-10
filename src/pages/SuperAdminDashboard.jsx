import { useEffect, useState } from "react";
import { fetchSystemStats } from "../services/mockApi";
import AdminDashboard from "./AdminDashboard";

export default function SuperAdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadStats = async () => {
      const data = await fetchSystemStats();
      setStats(data);
    };

    loadStats();
  }, []);

  const handleAddAdmin = (e) => {
    e.preventDefault();
    alert("Admin added!");
  };

  const handleRemoveAdmin = (e) => {
    e.preventDefault();
    alert("Admin removed!");
  };

  return (
    <div>
      <h2>Super Admin Dashboard</h2>

      <section>
        <h3>System Stats</h3>
        <p>Total Payments: {stats?.totalPayments ?? "Loading..."} birr</p>
        <p>Active Users: {stats?.activeUsers ?? "Loading..."}</p>
      </section>

      <section>
        <form onSubmit={handleAddAdmin}>
          <input placeholder="Admin Email" />
          <button type="submit">Add Admin</button>
        </form>

        <form onSubmit={handleRemoveAdmin}>
          <input placeholder="Admin Email" />
          <button type="submit">Remove Admin</button>
        </form>
      </section>

      <AdminDashboard />
    </div>
  );
}