import { useState } from "react";

const menuItems = [
  {
    label: "Watches",
    options: ["Rolex", "Patek Philippe", "Audemars Piguet", "All Watches"],
  },
  {
    label: "Jewelry",
    options: ["Rings", "Necklaces", "Bracelets"],
  },
  {
    label: "Services",
    options: ["Repair", "Authentication", "Appraisal"],
  },
  {
    label: "Sell or Trade",
    options: ["Sell Your Watch", "Trade-In"],
  },
];

export default function Navbar({ searchTerm, setSearchTerm }) {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-black text-gray-300 text-[11px] tracking-widest uppercase text-center py-2">
        Free Insured Shipping Worldwide &nbsp;•&nbsp; Authenticated by Experts
      </div>

      <nav className="flex items-center justify-between px-10 py-6 bg-neutral-100 border-b border-gray-300">
        
        <div className="text-3xl font-serif font-bold tracking-wider text-gray-900">
          USA <span className="text-orange-400">LUXURY</span>
        </div>

        <ul className="flex gap-10 text-gray-800 text-[13px] font-semibold tracking-widest uppercase">
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
          <li className="cursor-pointer py-2 hover:text-orange-400 transition-colors">
            Blog
          </li>
          <li className="cursor-pointer py-2 hover:text-orange-400 transition-colors">
            Support
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <input
            type="text"
            placeholder="Search watches..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-b border-gray-400 px-1 py-1.5 text-sm w-40 focus:outline-none focus:border-orange-400 transition-colors bg-transparent"
          />

          <button className="bg-black text-white text-xs font-semibold tracking-widest uppercase px-7 py-3 transition-all duration-300 hover:bg-orange-400 hover:text-black">
            Contact Us
          </button>
        </div>
      </nav>
    </div>
  );
}