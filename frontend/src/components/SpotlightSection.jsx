import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SpotlightSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [product, setProduct] = useState(null);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Scroll-trigger animation (jaisa pehle tha)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Backend se sab products le kar, "Omega Seamaster" dhoondo
 useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await fetch(
     
  "http://localhost:5000/api/products/6a573b1a31b3082f24a784a2"
);
      
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };
  fetchProduct();
}, []);

  // Button dabane par - us product ki detail page pe le jao
  const handleShopClick = () => {
    if (product) {
      navigate(`/product/${product._id}`);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-black via-neutral-900 to-black py-14 md:py-16 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-12 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div
          className={`relative w-full max-w-sm mx-auto transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-orange-400/30 to-transparent rounded-3xl blur-xl" />

          <div
            onClick={handleShopClick}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl ring-1 ring-orange-400/30 cursor-pointer"
          >
           <video
  src="http://localhost:5000/videos/1vv2.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover hover:scale-120 transition-transform duration-500"
/>

            <span className="absolute top-5 left-5 bg-red-500 text-white text-xs font-bold px-3.5 py-2 rounded-full shadow-lg shadow-red-500/50">
              -15% OFF
            </span>
          </div>
        </div>

        <div
          className={`max-w-xl mx-auto text-center flex flex-col items-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
          style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
        >
          <p className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            ✦ Featured Timepiece
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-5">
            <span className="bg-white text-black text-xs font-semibold tracking-wide uppercase px-3.5 py-1.5 rounded-full">
              Best Seller
            </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-black text-xs font-semibold tracking-wide uppercase px-3.5 py-1.5 rounded-full shadow-lg shadow-orange-500/30">
              🔥 Hot Item
            </span>
            <span className="border border-gray-600 text-gray-300 text-xs font-semibold tracking-wide uppercase px-3.5 py-1.5 rounded-full">
              Limited Stock
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-none">
            Omega
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">
              Seamaster
            </span>
          </h2>

          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="text-3xl font-bold text-white">$6,200</span>
            <span className="text-lg text-gray-500 line-through">$7,300</span>
            <span className="text-sm text-green-400 font-semibold">
              Save $1,100
            </span>
          </div>

          <p className="text-gray-400 leading-relaxed mb-7 text-[15px]">
            A professional diver's watch trusted for its durability and
            precision, water-resistant and built for both adventure and
            elegance.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleShopClick}
              className="bg-gradient-to-r from-orange-400 to-orange-500 text-black px-9 py-3.5 rounded-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
            >
              Shop This Watch
            </button>
            <button
              onClick={() => navigate("/")}
              className="border border-gray-600 text-white px-9 py-3.5 rounded-lg font-medium hover:border-orange-400 hover:text-orange-400 transition-all duration-300"
            >
              View Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}