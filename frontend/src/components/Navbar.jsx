import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { FaWhatsapp } from "react-icons/fa";


const menuItems = [ ];


export default function Navbar({ searchTerm, setSearchTerm }) {
  const [openMenu, setOpenMenu] = useState(null);
  // Naya state - mobile menu khula hai ya band
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <div className="sticky top-0 z-50">
<div className="bg-[#050505] text-[#D4AF37] text-[11px] tracking-[0.18em] uppercase text-center py-2 border-b border-[#8B6A2B]">        
  Free Insured Shipping Worldwide &nbsp;•&nbsp; Authenticated by Experts
      </div>

<nav className="flex items-center justify-between px-6 lg:px-12 py-3 bg-[#0B0B0B] border-b-2 border-[#8B6A2B] shadow-[0_2px_0_0_#8B6A2B]">   
      <div className="cursor-pointer">
  <h1 className="text-3xl md:text-[2rem] font-black tracking-[0.28em] text-white leading-none">
    VELORA
   </h1>
    <p className="text-[10px] tracking-[0.5em] uppercase text-[#D4AF37] font-semibold mt-1">
     LUXE
     </p>
     </div> 

        {/* Desktop menu - chhoti screen pe hide (hidden lg:flex) */}
        <ul className="hidden lg:flex items-center gap-10 text-white text-[13px] font-semibold tracking-[0.18em] uppercase">          {menuItems.map((item) => (
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
          <Link to="/blog" className="cursor-pointer py-2 text-white hover:text-[#D4AF37] transition-all duration-300">
             Blog
           </Link>
          <Link to="/support" className="cursor-pointer py-2 text-white hover:text-[#D4AF37] transition-all duration-300">
              Support
          </Link>
        </ul>

        {/* Desktop right side - chhoti screen pe hide */}
        <div className="hidden lg:flex items-center gap-8">
          <input
            type="text"
            placeholder="Search watches..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-b border-[#C9A14A] px-2 py-1 text-sm w-48 bg-transparent focus:outline-none"          />

          <Link to="/admin-login" className="text-sm font-semibold text-white hover:text-[#D4AF37] transition-all">
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

          <Link to="/login" className="text-sm font-semibold text-white hover:text-[#D4AF37] transition-all">
          Login
          </Link>

<button
  onClick={() =>
    window.open(
      "https://wa.me/923464453012?text=Hello%20VELORA%20LUXE",
      "_blank"
    )
  }
  className="flex items-center gap-2 border-2 border-[#D4AF37] bg-transparent text-[#D4AF37] text-xs font-bold tracking-[0.18em] uppercase px-6 py-3 rounded-md hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
>
  <FaWhatsapp className="text-lg" />
  <span>WhatsApp Us</span>
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
className="border border-[#D4AF37] bg-transparent text-[#D4AF37] text-xs font-bold tracking-[0.18em] uppercase px-6 py-3 rounded-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-300"          >
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
      "https://wa.me/923464453012?text=Hello%20VELORA%20LUXE",
      "_blank"
    )
  }
  className="w-full flex items-center justify-center gap-2 border-2 border-[#D4AF37] bg-transparent text-[#D4AF37] text-xs font-bold tracking-[0.18em] uppercase px-6 py-3 rounded-md hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
>
  <FaWhatsapp className="text-lg" />
  <span>WhatsApp Us</span>
</button>
        </div>
      )}
    </div>
  );
}