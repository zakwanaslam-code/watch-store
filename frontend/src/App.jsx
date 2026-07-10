import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import Footer from "./components/Footer.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      {/* Routes se BAHAR, lekin Router ke ANDAR hona zaroori hai
          taake ye har route change ko "sun" sake */}
      <ScrollToTop />

      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProductGrid searchTerm={searchTerm} />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;