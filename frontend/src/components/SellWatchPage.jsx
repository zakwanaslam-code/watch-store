import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SellWatchPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    model: "",
    condition: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/sell", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-black via-neutral-900 to-black min-h-screen flex items-center justify-center px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Thank You! 🎉
          </h2>
          <p className="text-gray-400 mb-8">
            We've received your submission. Our experts will review it and
            contact you within 24-48 hours.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-orange-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-br from-black via-neutral-900 to-black min-h-screen py-16">
      <div className="max-w-2xl mx-auto px-8">
        <h1 className="text-3xl font-serif font-bold text-white mb-2">
          Sell Your Watch
        </h1>
        <p className="text-gray-400 mb-8">
          Fill in the details below and our experts will get back to you with
          an offer.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-neutral-800/60 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-neutral-800/60 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-neutral-800/60 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="brand"
              placeholder="Watch brand (e.g. Rolex)"
              value={formData.brand}
              onChange={handleChange}
              required
              className="bg-neutral-800/60 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
            />
            <input
              type="text"
              name="model"
              placeholder="Model (e.g. Daytona)"
              value={formData.model}
              onChange={handleChange}
              required
              className="bg-neutral-800/60 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
            />
          </div>

          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
            className="w-full bg-neutral-800/60 border border-gray-600 text-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
          >
            <option value="" className="bg-neutral-900">
              Select condition
            </option>
            <option value="New" className="bg-neutral-900">
              New (unworn)
            </option>
            <option value="Excellent" className="bg-neutral-900">
              Excellent
            </option>
            <option value="Good" className="bg-neutral-900">
              Good
            </option>
            <option value="Fair" className="bg-neutral-900">
              Fair
            </option>
          </select>

          <textarea
            name="description"
            placeholder="Additional details (year, box/papers, etc.)"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full bg-neutral-800/60 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-black py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition"
          >
            Submit for Review
          </button>
        </form>
      </div>
    </section>
  );
}