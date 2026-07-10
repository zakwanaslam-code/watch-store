import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import Footer from "./components/Footer.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import CartPage from "./components/CartPage.jsx";
import AdminPanel from "./components/AdminPanel.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import SpotlightSection from "./components/SpotlightSection.jsx";


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
                 <SpotlightSection />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;