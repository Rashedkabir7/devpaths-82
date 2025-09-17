import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const providers = [
    { name: "Google", url: "/auth/google", color: "bg-red-500" },
    { name: "GitHub", url: "/auth/github", color: "bg-gray-800" },
    { name: "Discord", url: "/auth/discord", color: "bg-indigo-600" },
    { name: "Twitter", url: "/auth/twitter", color: "bg-sky-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      {providers.map((p) => (
        <a
          key={p.name}
          href={`${import.meta.env.VITE_API_URL}${p.url}`}
          className={`px-6 py-3 mb-3 rounded-lg text-white font-semibold ${p.color}`}
        >
          Continue with {p.name}
        </a>
      ))}
    </div>
  );
}
