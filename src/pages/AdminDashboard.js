import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/admin/users").then((res) => setUsers(res.data));

const socket = io("http://localhost:5000", { withCredentials: true });
socket.on("progressUpdated", console.log);
socket.on("roleUpdated", console.log);
socket.on("userCreated", console.log);

    socket.on("progressUpdated", (data) => {
      setUsers((prev) =>
        prev.map((u) => (u._id === data.id ? { ...u, progress: data.progress } : u))
      );
    });

    socket.on("roleUpdated", (data) => {
      setUsers((prev) =>
        prev.map((u) => (u._id === data.id ? { ...u, role: data.role } : u))
      );
    });

    socket.on("userCreated", (newUser) => {
      setUsers((prev) => [...prev, newUser]);
    });

    return () => socket.disconnect();
  }, []);

  const updateRole = (id, role) => {
    axios.put(`/api/admin/users/${id}/role`, { role }, { withCredentials: true });
  };

  const updateProgress = (id, progress) => {
    axios.put(`/api/admin/progress/${id}`, progress, { withCredentials: true });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Role</th><th>Progress</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>{u.progress.percentage}%</td>
              <td>
                <button onClick={() => updateRole(u._id, u.role === "user" ? "admin" : "user")}>
                  {u.role === "user" ? "Promote" : "Demote"}
                </button>
                <button onClick={() => updateProgress(u._id, { completedTopics: u.progress.completedTopics + 1, percentage: u.progress.percentage + 10 })}>
                  Add Progress
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

