import { BrowserRouter } from "react-router-dom";
import { useAuth, AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";

function AppRoutes() {
  const { user } = useAuth();

  if (!user) return <Login />;

  switch (user.role) {
    case "User":
      return <UserDashboard />;
    case "Admin":
      return <AdminDashboard />;
    case "SuperAdmin":
      return <SuperAdminDashboard />;
    default:
      return <p>Unknown role</p>;
  }
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
