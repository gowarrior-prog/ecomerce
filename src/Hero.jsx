// src/components/Hero.jsx
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-900 via-black to-indigo-950 opacity-90"></div>

      {/* Optional background image (uncomment when ready) */}
      {/* <div className="absolute inset-0 bg-[url('/hero-bg-fashion.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none mb-6">
            LUXE<span className="text-rose-500">Mart</span>
          </h1>

          <p className="text-xl md:text-3xl text-gray-200 font-light mb-10 md:mb-12 leading-relaxed">
            Discover Timeless Elegance • Curated Luxury Fashion • Exclusive Drops Daily
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8">
            {/* "Shop Now" button → links to Featured Products page */}
            <Link
              to="/featured"  // ← Change this to your actual route (e.g. "/shop" or "/featured-products")
              className="
                inline-flex items-center justify-center 
                px-10 py-5 text-lg font-semibold 
                text-white bg-rose-600 hover:bg-rose-700 
                rounded-full transition-all duration-300 
                shadow-lg hover:shadow-rose-500/30 
                transform hover:-translate-y-1
              "
            >
              Shop Now
            </Link>

            

            {/* "New Arrivals" button → you can link to a different page later */}
            <Link
              to="/featured"  // ← Optional: change to your New Arrivals route
              className="
                inline-flex items-center justify-center 
                px-10 py-5 text-lg font-semibold 
                text-white border-2 border-white/40 
                hover:border-white rounded-full 
                transition-all duration-300 
                hover:bg-white/10 backdrop-blur-sm
              "
            >
              New Arrivals
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-12 text-gray-400 text-sm md:text-base flex flex-wrap justify-center gap-x-8 gap-y-3">
            <span>✓ Free Shipping Over PKR 10,000</span>
            <span>✓ 30-Day Returns</span>
            <span>✓ Secure Checkout</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}