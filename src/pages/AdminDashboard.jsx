import { useEffect, useState } from "react";
import { fetchUsers } from "../services/mockApi";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const toggleUser = (id) => {
    setUsers(users.map((u) =>
      u.id === id ? { ...u, active: !u.active } : u
    ));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.active ? "Active" : "Inactive"}
            <button onClick={() => toggleUser(u.id)}>
              Toggle
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}
