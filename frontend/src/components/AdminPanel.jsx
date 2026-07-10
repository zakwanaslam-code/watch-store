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

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin-login");
      return;
    }
    fetchProducts();
  }, []);

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
    <section className="max-w-5xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

      <div className="bg-gray-50 rounded-xl p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Product name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded px-4 py-2"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="border rounded px-4 py-2"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL (e.g. http://localhost:5000/images/xyz.jpg)"
            value={formData.image}
            onChange={handleChange}
            required
            className="border rounded px-4 py-2 md:col-span-2"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border rounded px-4 py-2 md:col-span-2"
            rows="3"
          />

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-lg font-medium hover:bg-orange-400 hover:text-black transition md:col-span-2"
          >
            Add Product
          </button>
        </form>
      </div>

      <h2 className="text-xl font-semibold mb-4">Existing Products</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-3">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex items-center justify-between border rounded-lg p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-gray-500 text-sm">
                    ${product.price.toLocaleString()}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleDelete(product._id)}
                className="text-red-500 text-sm hover:underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}