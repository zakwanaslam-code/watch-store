import { useState, useEffect, useRef } from "react";

export default function SpotlightSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row-reverse gap-8 items-center">
        
        {/* Image - right side se slide-in */}
        <div
          className={`relative w-full lg:w-72 aspect-square rounded-2xl overflow-hidden bg-white shadow-lg flex-shrink-0 transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
        >
          <img
            src="http://localhost:5000/images/omega-seamaster.jpg"
            alt="Omega Seamaster"
            className="w-full h-full object-cover"
          />

          <span className="absolute top-5 left-5 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            -15% OFF
          </span>
        </div>

        {/* Text - left side se slide-in */}
        <div
          className={`flex-1 transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
          style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white text-black text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full">
              Best Seller
            </span>
            <span className="bg-orange-400 text-black text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full">
              🔥 Hot Item
            </span>
            <span className="border border-gray-500 text-gray-300 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full">
              Limited Stock
            </span>
          </div>

          <h2 className="text-3xl font-serif font-bold text-white mb-3">
            Omega Seamaster
          </h2>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-orange-400">
              $6,200
            </span>
            <span className="text-base text-gray-500 line-through">
              $7,300
            </span>
          </div>

          <p className="text-gray-400 leading-relaxed mb-6 max-w-md text-sm">
            A professional diver's watch trusted for its durability and
            precision, water-resistant and built for both adventure and
            elegance.
          </p>

          <div className="flex gap-4">
            <button className="bg-orange-400 text-black px-7 py-3 rounded-lg font-medium hover:bg-white transition-all duration-300">
              Shop This Watch
            </button>
            <button className="border border-gray-500 text-white px-7 py-3 rounded-lg font-medium hover:border-white transition-all duration-300">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}