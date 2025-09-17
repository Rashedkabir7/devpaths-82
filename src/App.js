import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import AdminDashboard from "./pages/AdminDashboard";

function AdminRoute({ children }) {
  const { user } = useAuth();
  if (!user || user.role !== "admin") return <h2>Access Denied</h2>;
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* other routes */}
    </Routes>
  );
}
