import { useParams, Link } from "react-router-dom";
import products from "../data/products.js";

export default function ProductDetail() {
  // URL se :id nikal rahe hain, jaise /product/2 se id = "2" milega
  const { id } = useParams();

  // products list mein se wo product dhoondo jiski id match kare
  // NOTE: useParams se id hamesha STRING milti hai, isliye
  // Number() se convert karke compare kar rahe hain
  const product = products.find((p) => p.id === Number(id));

  // Agar aisi id ka product exist hi nahi karta
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
      {/* Back link */}
      <Link
        to="/"
        className="text-sm text-gray-500 hover:text-orange-500 transition-colors"
      >
        ← Back to all watches
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
        {/* LEFT - Image */}
<div className="w-full max-w-sm mx-auto aspect-square bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
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
            Every timepiece is thoroughly verified by experts and comes fully
            authenticated and insured. Free worldwide shipping included.
          </p>

          <button className="w-full lg:w-auto bg-black text-white px-10 py-4 rounded-lg font-medium hover:bg-orange-400 hover:text-black transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}