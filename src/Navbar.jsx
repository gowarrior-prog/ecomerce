// src/components/Navbar.jsx
'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from './CartContext';  // ← Make sure this path is correct (adjust if needed)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Get both likedCount and cartCount from context
  const { likedCount, cartCount } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`
          backdrop-blur-xl bg-white/10 border-b border-white/15
          shadow-lg transition-all duration-300
        `}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl md:text-3xl font-black tracking-tight text-white">
                LUXE<span className="text-rose-500">Mart</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-10">
              <Link
                to="/"
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-rose-500 group-hover:w-full transition-all duration-300" />
              </Link>

              <div className="relative group">
                <button className="text-white/90 hover:text-white font-medium transition-colors duration-200 flex items-center gap-1">
                  Shop
                  <span className="text-xs">▼</span>
                </button>
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="w-64 bg-white/10 backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl overflow-hidden">
                    <div className="py-3">
                      <Link to="/category/new" className="block px-5 py-2.5 text-white/80 hover:bg-white/10 hover:text-white transition">
                        New Arrivals
                      </Link>
                      <Link to="/category/clothing" className="block px-5 py-2.5 text-white/80 hover:bg-white/10 hover:text-white transition">
                        Clothing
                      </Link>
                      <Link to="/category/shoes" className="block px-5 py-2.5 text-white/80 hover:bg-white/10 hover:text-white transition">
                        Shoes & Sneakers
                      </Link>
                      <Link to="/category/accessories" className="block px-5 py-2.5 text-white/80 hover:bg-white/10 hover:text-white transition">
                        Accessories
                      </Link>
                      <Link to="/sale" className="block px-5 py-2.5 text-rose-300 hover:bg-white/10 hover:text-rose-200 transition font-semibold">
                        Sale
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group inline-block"
              >
                About
                <span className="
                  absolute -bottom-1 left-0 h-0.5 w-0 
                  bg-gradient-to-r from-rose-500 to-pink-500 
                  group-hover:w-full transition-all duration-400 ease-out
                " />
              </Link>
            </div>

            {/* Actions - Desktop */}
            <div className="hidden lg:flex items-center gap-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className={`
                    bg-white/10 border border-white/20 text-white placeholder:text-white/50
                    rounded-full pl-4 pr-10 py-2.5 text-sm transition-all duration-300 outline-none
                    ${searchOpen ? 'w-72' : 'w-10 cursor-pointer'} focus:w-72 focus:bg-white/15 focus:border-white/30
                  `}
                  onFocus={() => setSearchOpen(true)}
                  onBlur={() => setSearchOpen(false)}
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 pointer-events-none" />
              </div>

              {/* Heart with live liked count */}
              <Link to="/wishlist" className="relative text-white/80 hover:text-white transition">
                <Heart className="h-6 w-6" />
                {likedCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {likedCount}
                  </span>
                )}
              </Link>

              {/* Cart with count */}
              <Link to="/cart" className="relative text-white/80 hover:text-white transition">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount || 0}
                </span>
              </Link>

              <Link to="/account" className="text-white/90 hover:text-white font-medium transition">
                Account
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black/60 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link to="/" className="block text-white/90 hover:text-white py-2">Home</Link>
              <Link to="/shop" className="block text-white/90 hover:text-white py-2">Shop</Link>
              <Link to="/category/new" className="block text-white/90 hover:text-white py-2 pl-4">→ New Arrivals</Link>
              <Link to="/category/clothing" className="block text-white/90 hover:text-white py-2 pl-4">→ Clothing</Link>
              <Link to="/sale" className="block text-rose-300 hover:text-rose-200 py-2 font-semibold">Sale</Link>
              <Link to="/about" className="block text-white/90 hover:text-white py-2">About</Link>

              <div className="pt-4 border-t border-white/10">
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-full pl-4 pr-10 py-3 text-sm"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 pointer-events-none" />
                </div>

                <div className="flex justify-around">
                  <Link to="/wishlist" className="flex flex-col items-center text-white/80 relative">
                    <Heart className="h-6 w-6 mb-1" />
                    {likedCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                        {likedCount}
                      </span>
                    )}
                    <span className="text-xs">Wishlist</span>
                  </Link>

                  <Link to="/cart" className="flex flex-col items-center text-white/80 relative">
                    <ShoppingCart className="h-6 w-6 mb-1" />
                    <span className="text-xs">Cart</span>
                    <span className="absolute -top-1 right-3 bg-rose-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                      {cartCount || 0}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}