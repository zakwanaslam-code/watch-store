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
className="fixed bottom-24 right-8 z-40 flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-black text-sm font-bold px-5 py-3 rounded-full shadow-lg shadow-orange-500/40 hover:scale-105 transition-all duration-300 animate-bounce-slow"    >
      🔥 Best Sellers
    </button>
  );
}