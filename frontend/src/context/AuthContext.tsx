"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface User {
  full_name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  isAuthenticated: boolean;

  login: (token: string, full_name: string, email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = () => {
      const savedToken = localStorage.getItem("access_token");
      const savedEmail = localStorage.getItem("user_email");
      const savedName = localStorage.getItem("user_name");

      if (savedToken && savedEmail && savedName) {
        setToken(savedToken);
        setUser({
          full_name: savedName,
          email: savedEmail,
        });
      }

      setLoading(false);
    };

    initializeAuth();
  }, []);

  function login(token: string, full_name: string, email: string) {
    localStorage.setItem("access_token", token);
    localStorage.setItem("user_email", email);
    localStorage.setItem("user_name", full_name);

    setToken(token);
    setUser({
      full_name,
      email,
    });     
  }

  function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_email");

    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used within AuthProvider"
    );
  }

  return context;
}