import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function AdminRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth() as { user: any; loading: boolean };

  if (loading) return <div className="p-6">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== "admin") return <Navigate to="/" replace />;

  return children;
}
