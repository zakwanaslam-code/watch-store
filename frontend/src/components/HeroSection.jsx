import { useState, useEffect } from "react";
import watchHero from "../assets/watch-hero.jpg";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-black min-h-[600px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* LEFT SIDE - Text */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-white text-6xl font-bold mb-6">
            Buy &amp; Sell
            <br />
            Luxury Watches
          </h1>
          <p className="text-gray-300 text-sm mb-2">
            ROLEX, PATEK, AP &amp; MORE - AUTHENTICATED &amp; INSURED
          </p>
          <p className="text-gray-400 mb-8 max-w-md">
            Shop with confidence. Every timepiece is thoroughly verified by
            experts and protected for your peace of mind.
          </p>
          <div className="flex gap-4">
            {/* Buttons ab hover pe scale + shadow ke saath animate honge */}
            <button className="bg-orange-400 text-black font-semibold px-6 py-3 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-400/40 active:scale-95">
              Buy Watches ↗
            </button>
            <button className="border border-white text-white font-semibold px-6 py-3 rounded transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black active:scale-95">
              Sell your Watches ↗
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Watch Image */}
        <div className="relative w-full h-[550px] flex items-center justify-center overflow-hidden group">
          <img
            src={watchHero}
            alt="Luxury Watch"
            className={`h-full w-auto object-contain transition-all duration-[1200ms] ease-out cursor-pointer
              animate-float
              group-hover:scale-110
              ${
                isLoaded
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
          />

          {/* Labels - ab hover pe thora bade/glow honge */}
          <div
            className={`absolute top-10 left-10 border border-white text-white text-xs px-3 py-1 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black cursor-default ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isLoaded ? "500ms" : "0ms" }}
          >
            56mm Premium Steel
          </div>

          <div
            className={`absolute top-1/3 left-0 border border-white text-white text-xs px-3 py-1 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black cursor-default ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isLoaded ? "700ms" : "0ms" }}
          >
            $7950.00
          </div>

          <div
            className={`absolute bottom-20 right-10 border border-white text-white text-xs px-3 py-1 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black cursor-default ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isLoaded ? "900ms" : "0ms" }}
          >
            Premium Tropic Rubber Strap
          </div>
        </div>
      </div>
    </section>
  );
}