import { useState, useEffect, useRef } from "react";
import watchHero from "../assets/watch-hero.jpg";

export default function HeroSection() {
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const textObserver = new IntersectionObserver(
      ([entry]) => setTextVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => setImageVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (textRef.current) textObserver.observe(textRef.current);
    if (imageRef.current) imageObserver.observe(imageRef.current);

    return () => {
      if (textRef.current) textObserver.unobserve(textRef.current);
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-black via-neutral-900 to-black min-h-[650px] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE - Text */}
        <div ref={textRef}>
          <p
            className={`text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 transition-all duration-700 ease-out ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            ✦ Since 1998 — Trusted Worldwide
          </p>

          <h1
            className={`text-white text-6xl font-bold mb-6 transition-all duration-700 ease-out ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
            style={{ transitionDelay: textVisible ? "100ms" : "0ms" }}
          >
            Buy &amp; Sell
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">
              Luxury Watches
            </span>
          </h1>

          <p
            className={`text-gray-300 text-sm mb-2 transition-all duration-700 ease-out ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
            style={{ transitionDelay: textVisible ? "250ms" : "0ms" }}
          >
            ROLEX, PATEK, AP &amp; MORE - AUTHENTICATED &amp; INSURED
          </p>

          <p
            className={`text-gray-400 mb-8 max-w-md transition-all duration-700 ease-out ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
            style={{ transitionDelay: textVisible ? "400ms" : "0ms" }}
          >
            Shop with confidence. Every timepiece is thoroughly verified by
            experts and protected for your peace of mind.
          </p>

          <div
            className={`flex gap-4 mb-10 transition-all duration-700 ease-out ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
            style={{ transitionDelay: textVisible ? "550ms" : "0ms" }}
          >
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-black font-semibold px-6 py-3 rounded shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50 active:scale-95">
              Buy Watches 
            </button>

            <button className="border border-gray-500 text-white font-semibold px-6 py-3 rounded transition-all duration-300 hover:scale-105 hover:border-orange-400 hover:text-orange-400 active:scale-95">
              Sell your Watches 
            </button>
          </div>

          <div
            className={`flex gap-8 border-t border-gray-800 pt-6 transition-all duration-700 ease-out ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
            style={{ transitionDelay: textVisible ? "700ms" : "0ms" }}
          >
            <div>
              <p className="text-2xl font-bold text-white">10,000+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Watches Sold
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">⭐ 4.9/5</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Customer Rating
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">25+ Yrs</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Industry Trust
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Watch Image */}
        <div
          ref={imageRef}
          className="relative w-full h-[550px] flex items-center justify-center overflow-visible"
        >
          <div className="absolute w-72 h-72 bg-orange-400/20 rounded-full blur-3xl" />

          <img
            src={watchHero}
            alt="Luxury Watch"
            className={`relative h-full w-auto object-contain transition-all duration-[2500ms] ease-out cursor-pointer hover:scale-105 ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          />

          <div className="absolute top-10 left-10 border border-orange-400/50 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded">
            56mm Premium Steel
          </div>

          <div className="absolute top-1/3 left-0 border border-orange-400/50 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded">
            $7950.00
          </div>

          <div className="absolute bottom-20 right-10 border border-orange-400/50 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded">
            Premium Tropic Rubber Strap
          </div>
        </div>
      </div>

      {/* HANGING TAG - Outside Grid (Center) */} 
      <div className="absolute top-6 left-[40%] -translate-x-1/2 flex flex-col items-center animate-slide-side z-20">
        <div className="w-px h-16 bg-gray-500" />

        <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-black text-sm font-bold px-5 py-2.5 rounded shadow-lg shadow-orange-500/40">
          Shop Now ✦
        </div>
      </div>
    </section>
  );
}