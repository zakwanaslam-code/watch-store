import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignupPage from "./components/SignupPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
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
import SellWatchPage from "./components/SellWatchPage.jsx";
import BlogPage from "./components/BlogPage.jsx";
import BlogDetail from "./components/BlogDetail.jsx";
import TrendingSection from "./components/TrendingSection.jsx";
import NewArrivalsSection from "./components/NewArrivalsSection.jsx";
import FloatingNewArrivalsButton from "./components/FloatingNewArrivalsButton.jsx";
import TrustBadgesSection from "./components/TrustBadgesSection.jsx";
import FloatingBestSellingButton from "./components/FloatingBestSellingButton.jsx";
import SupportPage from "./components/SupportPage.jsx";



function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <ScrollToTop />

      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
          
              <ProductGrid searchTerm={searchTerm} />
              <NewArrivalsSection />
              <SpotlightSection />
              <TrendingSection />
               
            </>
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/sell" element={<SellWatchPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>

         <TrustBadgesSection />
      <FloatingNewArrivalsButton />
      <FloatingBestSellingButton />
      <Footer />
    </div>
  );
}

export default App;