// pages/Login.jsx
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth(); /* Accessing login function */

  return (
    <div>
      <h2>Select A Role to Login:</h2>
      {["User", "Admin", "SuperAdmin"].map((role) => (
        <div key={role} style={{ marginBottom: "10px" }}>
        <button key={role} onClick={() => login(role)}>
          Login as {role}
        </button></div>
      ))}
    </div>
  );
}