import { useEffect, useReducer } from "react";
import { fetchUsers } from "../services/mockApi";

// Reducer function to manage users state
function usersReducer(state, action) {
  switch (action.type) {
    case "SET_USERS":
      return action.payload;
    case "TOGGLE_USER":
      return state.map((user) =>
        user.id === action.payload
          ? { ...user, active: !user.active }
          : user
      );
    default:
      return state;
  }
}

export default function AdminDashboard() {
  const [users, dispatch] = useReducer(usersReducer, []);

  useEffect(() => {
    fetchUsers().then((data) =>
      dispatch({ type: "SET_USERS", payload: data })
    );
  }, []);

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_USER", payload: id });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {users.map(({ id, name, active }) => (
          <li key={id}>
            {name} - {active ? "Active" : "Inactive"}
            <button onClick={() => handleToggle(id)}>Toggle</button>
          </li>
        ))}
      </ul>
      <a href="Login=.jsx" class="btn-link">Login As</a>
    </div>
  );
}