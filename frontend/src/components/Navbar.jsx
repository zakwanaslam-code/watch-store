import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const menuItems = [ ];


export default function Navbar({ searchTerm, setSearchTerm }) {
  const [openMenu, setOpenMenu] = useState(null);
  // Naya state - mobile menu khula hai ya band
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-black text-gray-300 text-[11px] tracking-widest uppercase text-center py-2">
        Free Insured Shipping Worldwide &nbsp;•&nbsp; Authenticated by Experts
      </div>

      <nav className="flex items-center justify-between px-5 md:px-10 py-4 md:py-6 bg-neutral-100 border-b border-gray-300">
        
       <div className="cursor-pointer">
  <h1 className="text-3xl md:text-4xl font-black tracking-[0.18em] text-gray-900 leading-none">
    VELORA
   </h1>
    <p className="text-[10px] tracking-[0.5em] uppercase text-orange-500 font-semibold mt-1">
     LUXE
     </p>
     </div> 

        {/* Desktop menu - chhoti screen pe hide (hidden lg:flex) */}
        <ul className="hidden lg:flex gap-10 text-gray-800 text-[13px] font-semibold tracking-widest uppercase">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="relative cursor-pointer py-2"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span className="relative flex items-center gap-1 pb-1">
                {item.label}
                <span className="text-[9px] mt-0.5">▾</span>
              </span>

              {openMenu === item.label && (
                <ul
                  className={`absolute top-full bg-white shadow-2xl border border-gray-100 pt-3 pb-2 w-56 z-10 normal-case ${
                    item.label === "Sell or Trade" || item.label === "Services"
                      ? "right-0"
                      : "left-0"
                  }`}
                >
                  {item.options.map((option) => (
                    <li
                      key={option}
                      className="px-5 py-3 hover:bg-gray-50 hover:pl-6 text-gray-600 text-sm tracking-normal font-normal transition-all duration-200"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <Link to="/blog" className="cursor-pointer py-2 hover:text-orange-400 transition-colors">
             Blog
           </Link>
          <Link to="/support" className="cursor-pointer py-2 hover:text-orange-400 transition-colors">
              Support
          </Link>
        </ul>

        {/* Desktop right side - chhoti screen pe hide */}
        <div className="hidden lg:flex items-center gap-6">
          <input
            type="text"
            placeholder="Search watches..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-b border-gray-400 px-1 py-1.5 text-sm w-40 focus:outline-none focus:border-orange-400 transition-colors bg-transparent"
          />

          <Link to="/admin-login" className="text-sm font-medium text-gray-600 hover:text-orange-400 transition-colors">
            Admin
          </Link>

          <Link to="/cart" className="relative">
            <span className="text-sm font-medium">🛒 Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <button
  onClick={() =>
    window.open(
      "https://wa.me/923464453012?text=Hello%20VELORA%20LUXE",
      "_blank"
    )
  }
  className="bg-green-600 text-white text-xs font-bold tracking-widest uppercase px-7 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
>
  WhatsApp Us
</button>
        </div>

        {/* Mobile - Cart icon + Hamburger, sirf chhoti screen pe dikhega */}
        <div className="flex lg:hidden items-center gap-4">
          <Link to="/cart" className="relative">
            <span className="text-xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU - sirf tab dikhega jab mobileMenuOpen true ho */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-5 py-4 space-y-4">
          <input
            type="text"
            placeholder="Search watches..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border rounded px-4 py-2 text-sm"
          />

          <ul className="space-y-3 text-gray-800 text-sm font-medium">
            {menuItems.map((item) => (
              <li key={item.label} className="border-b border-gray-100 pb-3">
                {item.label}
              </li>
            ))}
            <li className="border-b border-gray-100 pb-3">Blog</li>
            <li className="border-b border-gray-100 pb-3">Support</li>
            <li>
              <Link to="/admin-login" onClick={() => setMobileMenuOpen(false)}>
                Admin
              </Link>
            </li>
          </ul>

      <button
     onClick={() =>
      window.open(
      "https://wa.me/03464453012",
       "_blank"
    )
  }
  className="bg-green-600 text-white text-xs font-bold tracking-widest uppercase px-7 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
>
  WhatsApp Us
</button>
        </div>
      )}
    </div>
  );
}