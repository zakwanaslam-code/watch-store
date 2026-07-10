import { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ searchTerm }) {
  // State: products ab database se aayenge, isliye
  // shuru mein khaali array
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Component load hote hi backend se data mangwao
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        // "finally" hamesha chalta hai - chahe success ho ya error
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // [] = sirf ek baar chalega, jab component pehli baar aaye

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes((searchTerm || "").toLowerCase())
  );

  // Loading state - jab tak data aa nahi jata
  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-8 py-16 text-center">
        <p className="text-gray-500">Loading watches...</p>
      </section>
    );
  }

  // Error state - agar backend se connect na ho paye
  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-8 py-16 text-center">
        <p className="text-red-500">Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold mb-2">Featured Watches</h2>
      <p className="text-gray-500 mb-10">
        Handpicked timepieces, authenticated and ready to ship.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          // NOTE: MongoDB id ka naam "_id" hota hai, "id" nahi
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-gray-500 mt-8 text-center">No watches found.</p>
      )}
    </section>
  );
}