import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

type User = {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  role: "user" | "admin";
  provider: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const logout = async () => {
    await axios.get(`${import.meta.env.VITE_API_URL}/auth/logout`, {
      withCredentials: true,
    });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}



