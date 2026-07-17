export default function FloatingNewArrivalsButton() {
  const scrollToNewArrivals = () => {
    const section = document.getElementById("new-arrivals");
    if (section) {
      // smooth scroll - achi tarah animate hoke jayega,
      // seedha "jump" nahi karega
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToNewArrivals}
className="fixed bottom-8 right-8 z-40 bg-[#0B0B0B] border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-lg  text-base font-semibold shadow-[0_0_12px_rgba(212,175,55,0.15)] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 animate-floating">    
      ✦ New Arrivals
    </button>
  );
}
