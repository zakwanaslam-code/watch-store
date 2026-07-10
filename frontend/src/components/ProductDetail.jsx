import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-20 text-center">
        <p className="text-xl text-gray-600">Product not found.</p>
        <Link to="/" className="text-orange-500 underline mt-4 inline-block">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <Link
        to="/"
        className="text-sm text-gray-500 hover:text-orange-500 transition-colors"
      >
        ← Back to all watches
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
        {/* LEFT - Image (ek hi div, nested nahi) */}
        <div className="w-[350px] h-[350px] mx-auto overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-cover"
  />
</div>

        {/* RIGHT - Details */}
        <div>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-2xl text-orange-500 font-bold mb-6">
            ${product.price.toLocaleString()}
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>
          
          <button
              onClick={() => addToCart(product)}
              className="w-full lg:w-auto bg-black text-white px-10 py-4 rounded-lg font-medium hover:bg-orange-400 hover:text-black transition-all duration-300"
              >
              Add to Cart
            </button>
        </div>
      </div>
    </section>
  );
}