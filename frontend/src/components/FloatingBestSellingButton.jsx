import { FaFire } from "react-icons/fa";

export default function FloatingBestSellingButton() {
  const scrollToSection = () => {
    const section = document.getElementById("best-selling");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToSection}
className="fixed bottom-24 right-8 z-40 flex items-center bg-black gap-2   border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-lg text-base font-semibold shadow-[0_0_12px_rgba(212,175,55,0.15)] hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
    <FaFire className="text-[#D4AF37] text-sm" />
<span>Best Sellers</span>
    </button>
  );
}

