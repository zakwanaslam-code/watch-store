import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // useNavigate - isse hum code se seedha kisi
  // route pe "bhej" sakte hain (Link jaisa, lekin
  // click ke bagair, function se trigger hota hai)
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Token mila - browser mein save karo
        // (localStorage = browser ki apni storage,
        // refresh karne pe bhi data yaad rehta hai)
        localStorage.setItem("adminToken", data.token);
        navigate("/admin"); // login hone ke baad admin page pe bhejo
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto px-8 py-24">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border rounded px-4 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border rounded px-4 py-2"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-orange-400 hover:text-black transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}