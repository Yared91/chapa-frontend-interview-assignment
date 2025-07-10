import React, { createContext, useContext, useState } from "react";

// 1. Create context
const AuthContext = createContext();

// 2. Custom hook to encapsulate logic
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const login = (role) => {
    setUser({ name: "Mock User", role });
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    login,
    logout,
  };
}

// 3. Context provider
export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

// 4. Hook to consume context
export const useAuth = () => {
  return useContext(AuthContext);
};