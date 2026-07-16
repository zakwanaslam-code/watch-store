import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function NewArrivalsSection() {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();

        const sorted = [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setProducts(sorted.slice(0, 4));
      } catch (err) {
        console.log(err);
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

  return (
    <section
      ref={sectionRef}
      id="new-arrivals"
      className="bg-gradient-to-br from-black via-neutral-900 to-black py-16"
    >
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">
          ✦ Just In
        </p>
        <h2 className="text-3xl font-bold text-white mb-10">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className={`group relative bg-neutral-800/60 border border-gray-700 rounded-xl overflow-hidden hover:border-orange-400/50 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <span className="absolute top-3 left-3 z-10 bg-gradient-to-r from-orange-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                NEW
              </span>

              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-white mb-1 truncate">
                  {product.name}
                </h3>
                <p className="text-orange-400 font-bold">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}