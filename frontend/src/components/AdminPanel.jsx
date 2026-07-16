import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  const [sellRequests, setSellRequests] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSellRequests = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/sell");
      const data = await response.json();
      setSellRequests(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin-login");
      return;
    }
    fetchProducts();
    fetchSellRequests();
  }, []);

  const [postFormData, setPostFormData] = useState({
  title: "",
  excerpt: "",
  content: "",
  image: "",
  author: "USA Luxury Team",
});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
        }),
      });

      if (response.ok) {
        alert("Product added successfully!");
        setFormData({ name: "", price: "", image: "", description: "" });
        fetchProducts();
      }
    } catch (err) {
      console.log(err);
    }
  };

const handlePostChange = (e) => {
  setPostFormData({ ...postFormData, [e.target.name]: e.target.value });
};

const handlePostSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postFormData),
    });

    if (response.ok) {
      alert("Blog post published successfully!");
      setPostFormData({
        title: "",
        excerpt: "",
        content: "",
        image: "",
        author: "USA Luxury Team",
      });
    }
  } catch (err) {
    console.log(err);
  }
};


  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });
      fetchProducts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="bg-gradient-to-br from-black via-neutral-900 to-black min-h-screen py-16">
     <div className="max-w-5xl mx-auto px-8">
       <h1 className="text-3xl font-serif font-bold mb-8 text-white text-center">
         Admin Panel
       </h1>

        <div className="bg-neutral-800/60 border border-gray-700 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Add New Product
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Product name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-neutral-900 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
              className="bg-neutral-900 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL (e.g. http://localhost:5000/images/xyz.jpg)"
              value={formData.image}
              onChange={handleChange}
              required
              className="bg-neutral-900 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 md:col-span-2 focus:outline-none focus:border-orange-400"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="bg-neutral-900 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 md:col-span-2 focus:outline-none focus:border-orange-400"
              rows="3"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-orange-400 to-orange-500 text-black py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition md:col-span-2"
            >
              Add Product
            </button>
          </form>
        </div>

        <div className="bg-neutral-800/60 border border-gray-700 rounded-xl p-6 mb-12">
  <h2 className="text-xl font-semibold mb-4 text-white">
    Publish Blog Post
  </h2>

  <form onSubmit={handlePostSubmit} className="grid grid-cols-1 gap-4">
    <input
      type="text"
      name="title"
      placeholder="Post title"
      value={postFormData.title}
      onChange={handlePostChange}
      required
      className="bg-neutral-900 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
    />

    <input
      type="text"
      name="excerpt"
      placeholder="Short summary (shown on Blog listing page)"
      value={postFormData.excerpt}
      onChange={handlePostChange}
      required
      className="bg-neutral-900 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
    />

    <textarea
      name="content"
      placeholder="Full article content"
      value={postFormData.content}
      onChange={handlePostChange}
      required
      rows="6"
      className="bg-neutral-900 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
    />

    <input
      type="text"
      name="image"
      placeholder="Image URL"
      value={postFormData.image}
      onChange={handlePostChange}
      required
      className="bg-neutral-900 border border-gray-600 text-white placeholder-gray-500 rounded px-4 py-2 focus:outline-none focus:border-orange-400"
    />

    <button
      type="submit"
      className="bg-gradient-to-r from-orange-400 to-orange-500 text-black py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition"
    >
      Publish Post
    </button>
  </form>
</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT COLUMN - Products */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">
              Existing Products
            </h2>

            {loading ? (
              <p className="text-gray-400">Loading...</p>
            ) : (
              <div className="space-y-3">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="flex items-center justify-between bg-neutral-800/60 border border-gray-700 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-14 h-14 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium text-white">
                          {product.name}
                        </p>
                        <p className="text-orange-400 text-sm">
                          ${product.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-red-400 text-sm hover:text-red-300 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN - Sell Requests */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">
              Sell Watch Requests ({sellRequests.length})
            </h2>

            {sellRequests.length === 0 ? (
              <p className="text-gray-400">No requests yet.</p>
            ) : (
              <div className="space-y-3">
                {sellRequests.map((req) => (
                  <div
                    key={req._id}
                    className="bg-neutral-800/60 border border-gray-700 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-white">
                        {req.brand} {req.model}
                      </p>
                      <span className="text-xs bg-orange-400/20 text-orange-300 border border-orange-400/40 px-2.5 py-1 rounded-full font-medium">
                        {req.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">
                      {req.name} • {req.email} • {req.phone}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Condition: {req.condition}
                    </p>
                    {req.description && (
                      <p className="text-sm text-gray-500 mt-1">
                        {req.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}