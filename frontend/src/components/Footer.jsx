export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1 - Brand */}
        <div>
          <h3 className="text-white font-bold text-xl mb-3">
            USA <span className="text-orange-400">LUXURY</span>
          </h3>
          <p className="text-sm text-gray-400">
            Buy and sell authenticated luxury watches with confidence.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Watches</li>
            <li>Jewelry</li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Sell or Trade</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-400">support@usaluxury.com</p>
          <p className="text-sm text-gray-400">+1 (800) 123-4567</p>
        </div>
      </div>

      {/* Bottom strip - copyright */}
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © 2026 USA Luxury Watches. All rights reserved.
      </div>
    </footer>
  );
}