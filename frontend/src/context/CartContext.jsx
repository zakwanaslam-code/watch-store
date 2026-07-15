import { createContext, useContext, useState } from "react";

// Context banaya
const CartContext = createContext();

 
export function CartProvider({ children }) {
  // cartItems = array of products jo add kiye gaye
  const [cartItems, setCartItems] = useState([]);

  // Function: naya product cart mein add karo
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check karo - ye product pehle se cart mein hai kya?
      const existingItem = prevItems.find((item) => item._id === product._id);

      if (existingItem) {
        // Agar hai, to sirf quantity +1 karo
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Agar nahi hai, to naya item add karo quantity 1 ke sath
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function: cart se item hatao
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== productId)
    );
  };

  // Total items count (Navbar badge ke liye)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Total price (Cart page ke liye)
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook - isse har component aasani se cart use kar sakega
// (bina seedha useContext(CartContext) baar baar likhe)
export function useCart() {
  return useContext(CartContext);
}