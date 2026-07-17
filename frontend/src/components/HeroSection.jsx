import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

export default function HeroSection() {
  const [textVisible, setTextVisible] = useState(false);
  const textRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const textObserver = new IntersectionObserver(
      ([entry]) => setTextVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (textRef.current) textObserver.observe(textRef.current);

    return () => {
      if (textRef.current) textObserver.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-[650px] overflow-hidden">
      {/* BACKGROUND VIDEO - poore section ko cover karti hai */}
      <video
        src="http://localhost:5000/videos/1vv3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

     {/* DARK OVERLAY */}
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />

{/* Gold Glow Effects */}
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl" />
<div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

<div className="relative max-w-7xl mx-auto px-8 py-16">
  <div ref={textRef} className="max-w-2xl">

    {/* Small Heading */}
    <p
      className={`text-[#D4AF37] uppercase tracking-[0.25em] text-sm font-semibold mb-5 transition-all duration-700 ease-out ${
        textVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-20"
      }`}
    >
      ✦ Since 1998 — Trusted Worldwide
    </p>

    {/* Main Heading */}
    <h1
className={`text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6 transition-all duration-700 ease-out ${        textVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-20"
      }`}
      style={{ transitionDelay: textVisible ? "100ms" : "0ms" }}
    >
      Buy &amp; Sell
      <br />
      <span className="bg-gradient-to-r from-[#F8E08A] via-[#D4AF37] to-[#A97B22] bg-clip-text text-transparent">
        Luxury Watches
      </span>
    </h1>

    {/* Gold Divider */}
    <div
      className={`w-24 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent mb-6 transition-all duration-700 ${
        textVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-20"
      }`}
      style={{ transitionDelay: textVisible ? "180ms" : "0ms" }}
    />

    {/* Subtitle */}
    <p
      className={`text-[#D0D0D0] uppercase tracking-[0.15em] text-sm mb-3 transition-all duration-700 ease-out ${
        textVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-20"
      }`}
      style={{ transitionDelay: textVisible ? "250ms" : "0ms" }}
    >
      ROLEX • PATEK • AP &amp; MORE — AUTHENTICATED &amp; INSURED
    </p>

    {/* Description */}
    <p
      className={`text-gray-300 text-lg leading-8 max-w-xl mb-8 transition-all duration-700 ease-out ${
        textVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-20"
      }`}
      style={{ transitionDelay: textVisible ? "400ms" : "0ms" }}
    >
      Shop with confidence. Every timepiece is thoroughly verified by
      experts and protected for your peace of mind.
    </p>
    {/* Buttons */}
    <div
      className={`flex flex-wrap gap-5 mb-12 transition-all duration-700 ease-out ${
        textVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-20"
      }`}
      style={{ transitionDelay: textVisible ? "550ms" : "0ms" }}
    >
      {/* Buy Button */}
      <button className="flex items-center gap-2 px-8 py-4 rounded-md bg-gradient-to-r from-[#E6C35C] via-[#D4AF37] to-[#B8860B] text-black font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] transition-all duration-300">
        <FiShoppingBag className="text-lg" />
        Buy Watches
      </button>

      {/* Sell Button */}
      <button
        onClick={() => navigate("/sell")}
        className="px-8 py-4 rounded-md border border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-black hover:scale-105 transition-all duration-300"
      >
        Sell Your Watches ↗
      </button>
    </div>

    {/* Stats */}
    <div
      className={`grid grid-cols-3 gap-8 border-t border-[#4B3A1E] pt-8 transition-all duration-700 ease-out ${
        textVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-20"
      }`}
      style={{ transitionDelay: textVisible ? "700ms" : "0ms" }}
    >
      <div>
        <p className="text-4xl font-black text-white">10,000+</p>
        <p className="text-[#D4AF37] uppercase text-xs tracking-[0.15em] mt-2">
          Watches Sold
        </p>
      </div>

      <div>
        <p className="text-4xl font-black text-white">
          ⭐ <span className="text-[#D4AF37]">4.9/5</span>
        </p>
        <p className="text-[#D4AF37] uppercase text-xs tracking-[0.15em] mt-2">
          Customer Rating
        </p>
      </div>

      <div>
        <p className="text-4xl font-black text-white">25+ Yrs</p>
        <p className="text-[#D4AF37] uppercase text-xs tracking-[0.10em] mt-2">
          Industry Trust
        </p>
      </div>
    </div>

  </div>
</div>

{/* Hanging Luxury Tag */}
<div className="absolute top-0 right-20 flex flex-col items-center animate-slide-side z-20">
  <div className="w-[2px] h-20 bg-gradient-to-b from-gray-300 to-[#D4AF37]" />

  <div className="bg-[#0B0B0B] border border-[#D4AF37] text-[#D4AF37] px-7 py-3 rounded-md shadow-[0_0_25px_rgba(212,175,55,0.18)] backdrop-blur-md">
    <div className="flex items-center gap-2 uppercase tracking-[0.18em] font-semibold text-sm">
      <FiShoppingBag className="text-base" />
      <span>Shop Now</span>
      <span>✦</span>
    </div>
  </div>
</div>

</section>
  );
}