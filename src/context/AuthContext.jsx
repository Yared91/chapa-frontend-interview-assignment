import { createContext, useContext, useState } from "react"; /* setting up a global context to manage authentication state */

const AuthContext = createContext(); /* creates a context to share user data across components */

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (role) => {
    setUser({ name: "Mock User", role });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); /* custom hook so components can easily use the context */