import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function CartPage() {
  const { cartItems, removeFromCart, cartTotal } = useCart();

  // Agar cart khaali hai
  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/" className="text-orange-500 underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between border border-gray-200 rounded-lg p-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">
                  Quantity: {item.quantity}
                </p>
                <p className="text-orange-500 font-bold">
                  ${item.price.toLocaleString()}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item._id)}
              className="text-red-500 text-sm hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-8 flex justify-between items-center border-t pt-6">
        <p className="text-xl font-bold">
          Total: ${cartTotal.toLocaleString()}
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-400 hover:text-black transition">
          Checkout
        </button>
      </div>
    </section>
  );
}