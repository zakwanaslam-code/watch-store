import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ searchTerm }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes((searchTerm || "").toLowerCase())
  );

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold mb-2">Featured Watches</h2>
      <p className="text-gray-500 mb-10">
        Handpicked timepieces, authenticated and ready to ship.
      </p>

      {loading && <p className="text-gray-500 text-center">Loading watches...</p>}

      {error && <p className="text-red-500 text-center">Error: {error}</p>}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product._id}
                className={`transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-gray-500 mt-8 text-center">No watches found.</p>
          )}
        </>
      )}
    </section>
  );
}