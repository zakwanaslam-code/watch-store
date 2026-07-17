import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("userToken", data.token);
        localStorage.setItem("userName", data.user.name);
        navigate("/");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <section className="bg-gradient-to-br from-black via-neutral-900 to-black min-h-screen flex items-center justify-center px-8">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-serif font-bold text-white mb-2 text-center">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Log in to your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-neutral-800/60 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2.5 focus:outline-none focus:border-orange-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full bg-neutral-800/60 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2.5 focus:outline-none focus:border-orange-400"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-black py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-orange-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}