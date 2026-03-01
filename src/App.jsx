// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';

// Correct page imports (all files directly in src/)
import Home from './Home.jsx';
import Cart from './Cart.jsx';                 // ← your cart PAGE (not context)
import ProductDetail from './ProductDetail.jsx';
import Checkout from './Checkout.jsx';
import About from './About.jsx';
import FeaturedProducts from './FeaturedProducts.jsx';
import Wishlist from './Wishlist.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/featured" element={<FeaturedProducts />} />
        <Route path="/wishlist" element={<Wishlist />} />

        {/* Catch-all for wrong URLs */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-white">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;