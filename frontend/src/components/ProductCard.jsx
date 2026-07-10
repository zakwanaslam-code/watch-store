import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="relative border border-gray-200 rounded-xl p-5 hover:shadow-xl transition-shadow duration-300 bg-white">
        
        {/* Discount badge - sirf tab dikhega jab product.discount maujood ho */}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
            -{product.discount}%
          </span>
        )}

        <div className="w-full aspect-square overflow-hidden rounded-lg mb-4 bg-gray-50 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h3 className="font-semibold text-lg text-gray-900 mb-1">
          {product.name}
        </h3>

        {/* Price section - agar discount hai to dono prices dikhao */}
        <div className="flex items-center gap-2 mb-4">
          <p className="text-orange-500 font-bold text-xl">
            ${product.price.toLocaleString()}
          </p>
          {product.oldPrice && (
            <p className="text-gray-400 text-sm line-through">
              ${product.oldPrice.toLocaleString()}
            </p>
          )}
        </div>

        <button className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition">
          View Details
        </button>
      </div>
    </Link>
  );
}