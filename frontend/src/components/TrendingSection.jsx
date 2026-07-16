import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function TrendingSection() {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data.slice(0, 4));
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
  id="best-selling"
  className="bg-white py-16"
>
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-2 text-center">
  🔥 Trending This Week
</p>
<h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
  Best Selling Products
</h2>
  
         

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className={`group relative bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <span className="absolute top-3 left-3 z-10 bg-black text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                #{index + 1}
              </span>

              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 truncate">
                  {product.name}
                </h3>
                <p className="text-orange-500 font-bold">
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