import products from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ searchTerm }) {
  // Filter: sirf wo products rakho jinke naam mein
  // searchTerm shamil hai (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold mb-8">Featured Watches</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Agar koi result na mile to message dikhao */}
      {filteredProducts.length === 0 && (
        <p className="text-gray-500 mt-8">No watches found.</p>
      )}
    </section>
  );
}