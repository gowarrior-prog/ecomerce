// src/components/FeaturedProducts.jsx
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import { ShoppingCart, X, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const products = [
  // Pehle ke 30 products (tumhare original + pehle add kiye gaye)
  {
    id: 1,
    name: "Suede High Heel Sandals - Brown Strappy",
    price: 18900,
    originalPrice: 24900,
    image: "https://m.media-amazon.com/images/I/51rZ6GUEoAL.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Gold Chain Necklace Luxury 18K",
    price: 24900,
    image: "https://www.hollywoodreporter.com/wp-content/uploads/2024/11/Jewelry-Gift-Guide-MAIN.jpg?w=1296&h=730&crop=1",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Black Suede Ankle Strap Heels",
    price: 32000,
    image: "https://m.media-amazon.com/images/I/61S-USI9f3L._AC_UY900_.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Crystal & Pearl Accessories Set",
    price: 15900,
    image: "https://m.media-amazon.com/images/I/51M5u5P6bsS._AC_UY1000_.jpg",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Whiskey Matte Suede Pumps",
    price: 21000,
    originalPrice: 28000,
    image: "http://www.joanoloffshoes.com/cdn/shop/files/product-name-882177.jpg?v=1740836596",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Statement Diamond Drop Earrings",
    price: 18000,
    image: "https://mygemma.com/cdn/shop/articles/best_everyday_designer_jewelry.png?v=1715252680",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Italian Leather Crossbody Bag",
    price: 45000,
    originalPrice: 58000,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5f92182?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
  },
  {
    id: 8,
    name: "Silk Wrap Midi Dress - Emerald",
    price: 32000,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
  },
  {
    id: 9,
    name: "Rose Gold Layered Necklace Set",
    price: 22000,
    image: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
  },
  {
    id: 10,
    name: "Classic Black Leather Loafers",
    price: 28000,
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
  },
  {
    id: 11,
    name: "Velvet Evening Clutch Bag",
    price: 15000,
    originalPrice: 22000,
    image: "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
  },
  {
    id: 12,
    name: "Pearl Drop Earrings 14K Gold",
    price: 14000,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5f92182?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
  },
  {
    id: 13,
    name: "Luxury Velvet Evening Gown",
    price: 85000,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
  },
  {
    id: 14,
    name: "Designer Leather Tote Bag",
    price: 62000,
    originalPrice: 78000,
    image: "https://images.unsplash.com/photo-1584917865446-1a2c4c6e0b4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
  },
  {
    id: 15,
    name: "Platinum Diamond Ring",
    price: 98000,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 5.0,
  },
  {
    id: 16,
    name: "Chanel Inspired Quilted Leather Handbag",
    price: 72000,
    originalPrice: 95000,
    image: "https://images.unsplash.com/photo-1584917865446-1a2c4c6e0b4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
  },
  {
    id: 17,
    name: "Minimalist Gold Hoop Earrings 18K",
    price: 16500,
    image: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
  },
  {
    id: 18,
    name: "Red Stiletto Heels with Crystal Embellishment",
    price: 38000,
    image: "https://m.media-amazon.com/images/I/71k0kS5v2QL._AC_UY900_.jpg",
    rating: 4.7,
  },
  {
    id: 19,
    name: "Hermès Style Silk Scarf - Luxury Print",
    price: 42000,
    originalPrice: 55000,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
  },
  {
    id: 20,
    name: "Diamond Tennis Bracelet 14K White Gold",
    price: 145000,
    image: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 5.0,
  },
  {
    id: 21,
    name: "Nude Matte Leather Pumps",
    price: 19500,
    originalPrice: 26000,
    image: "https://m.media-amazon.com/images/I/71k0kS5v2QL._AC_UY900_.jpg",
    rating: 4.8,
  },
  {
    id: 22,
    name: "Vintage-Inspired Pearl Choker Necklace",
    price: 29000,
    image: "https://mygemma.com/cdn/shop/articles/best_everyday_designer_jewelry.png?v=1715252680",
    rating: 4.7,
  },
  {
    id: 23,
    name: "Black Crocodile Embossed Crossbody",
    price: 68000,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5f92182?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
  },
  {
    id: 24,
    name: "Emerald Green Satin Evening Dress",
    price: 92000,
    originalPrice: 115000,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
  },
  {
    id: 25,
    name: "Sterling Silver Hoop Earrings with Diamonds",
    price: 34000,
    image: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
  },
  {
    id: 26,
    name: "Beige Trench Coat - Wool Blend",
    price: 78000,
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
  },
  {
    id: 27,
    name: "Sapphire & Diamond Pendant Necklace",
    price: 135000,
    originalPrice: 168000,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 5.0,
  },
  {
    id: 28,
    name: "White Gold Bangle Bracelet",
    price: 52000,
    image: "https://mygemma.com/cdn/shop/articles/best_everyday_designer_jewelry.png?v=1715252680",
    rating: 4.9,
  },
  {
    id: 29,
    name: "Navy Blue Tailored Blazer Dress",
    price: 48000,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
  },
  {
    id: 30,
    name: "Luxury Oversized Sunglasses - Gold Frame",
    price: 38000,
    originalPrice: 52000,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
  },

  // ------------------- Aur 15 Naye Products (total ab 45) -------------------
  {
    id: 31,
    name: "Gucci Style Marmont Matelassé Shoulder Bag",
    price: 89000,
    originalPrice: 112000,
    image: "https://images.unsplash.com/photo-1584917865446-1a2c4c6e0b4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
  },
  {
    id: 32,
    name: "Cartier Love Bracelet Inspired - Rose Gold",
    price: 165000,
    image: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 5.0,
  },
  {
    id: 33,
    name: "Metallic Silver Pointed Toe Heels",
    price: 29500,
    image: "https://m.media-amazon.com/images/I/71k0kS5v2QL._AC_UY900_.jpg",
    rating: 4.7,
  },
  {
    id: 34,
    name: "Louis Vuitton Inspired Monogram Scarf",
    price: 38000,
    originalPrice: 48000,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
  },
  {
    id: 35,
    name: "18K Gold Layered Chain Anklet",
    price: 28500,
    image: "https://mygemma.com/cdn/shop/articles/best_everyday_designer_jewelry.png?v=1715252680",
    rating: 4.8,
  },
  {
    id: 36,
    name: "Black Satin Slip Dress with Lace Detail",
    price: 42000,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
  },
  {
    id: 37,
    name: "Vintage Pearl & Gold Drop Earrings",
    price: 32000,
    originalPrice: 41000,
    image: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
  },
  {
    id: 38,
    name: "Brown Leather Belted Trench Coat",
    price: 95000,
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
  },
  {
    id: 39,
    name: "Emerald Cut Diamond Solitaire Ring",
    price: 220000,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 5.0,
  },
  {
    id: 40,
    name: "White Gold & Diamond Hoop Earrings",
    price: 68000,
    image: "https://mygemma.com/cdn/shop/articles/best_everyday_designer_jewelry.png?v=1715252680",
    rating: 4.9,
  },
  {
    id: 41,
    name: "Burgundy Velvet Evening Blazer",
    price: 58000,
    originalPrice: 72000,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
  },
  {
    id: 42,
    name: "Gold Plated Layered Necklace Set",
    price: 28000,
    image: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
  },
  {
    id: 43,
    name: "Black Patent Leather Pointed Pumps",
    price: 34000,
    image: "https://m.media-amazon.com/images/I/71k0kS5v2QL._AC_UY900_.jpg",
    rating: 4.8,
  },
  {
    id: 44,
    name: "Rose Gold Watch - Minimalist Design",
    price: 125000,
    originalPrice: 158000,
    image: "https://images.unsplash.com/photo-1524592094714-0f25c5025c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
  },
  {
    id: 45,
    name: "Luxury Leather Wallet - Monogram Pattern",
    price: 45000,
    image: "https://images.unsplash.com/photo-1584917865446-1a2c4c6e0b4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
  },
];

export default function FeaturedProducts() {
  const navigate = useNavigate();
  const { addToCart, cartItems, cartCount } = useCart();

  // Liked products ka state
  const [likedProducts, setLikedProducts] = useState({});

  // 1. Page load hone pe localStorage se load karo
  useEffect(() => {
    const savedLikes = localStorage.getItem('likedProducts');
    if (savedLikes) {
      setLikedProducts(JSON.parse(savedLikes));
    }
  }, []);

  // 2. Har change pe localStorage mein save kar do
  useEffect(() => {
    localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
  }, [likedProducts]);

  const toggleLike = (productId, e) => {
    e.stopPropagation();
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const [showCartSummary, setShowCartSummary] = useState(false);

  const handleViewDetail = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddClick = (product) => {
    addToCart(product);
    setShowCartSummary(true);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <section className="py-12 md:py-24 bg-black/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Featured <span className="text-rose-500">Collection</span>
            </h2>

            <Link
              to="/shop"
              className="mt-4 md:mt-0 text-rose-400 hover:text-rose-300 font-medium flex items-center gap-2 transition-colors text-base sm:text-lg"
            >
              View All Products <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product) => {
              const isLiked = !!likedProducts[product.id];

              return (
                <div
                  key={product.id}
                  className="
                    group relative 
                    bg-white/5 backdrop-blur-sm border border-white/10 
                    rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                    transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2
                    cursor-pointer
                  "
                  onClick={() => handleViewDetail(product.id)}
                >
                  <button
                    onClick={(e) => toggleLike(product.id, e)}
                    className="
                      absolute top-3 right-3 z-20 
                      p-2.5 rounded-full bg-black/60 hover:bg-black/80 
                      transition-all duration-200 hover:scale-110 shadow-md
                    "
                  >
                    <Heart
                      size={26}
                      className={`
                        transition-all duration-300
                        ${isLiked 
                          ? 'fill-rose-500 stroke-rose-500' 
                          : 'fill-none stroke-white hover:stroke-rose-400'
                        }
                      `}
                    />
                  </button>

                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x533/111/eee?text=LUXE+Mart";
                      }}
                    />
                    {product.originalPrice && (
                      <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-md">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-rose-400 transition-colors truncate">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-2">
                        <p className="text-lg sm:text-xl font-bold text-white">
                          PKR {product.price.toLocaleString('en-PK')}
                        </p>
                        {product.originalPrice && (
                          <p className="text-xs sm:text-sm text-gray-400 line-through">
                            PKR {product.originalPrice.toLocaleString('en-PK')}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-gray-400 text-xs sm:text-sm ml-1 hidden sm:inline">({product.rating})</span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddClick(product);
                      }}
                      className="
                        w-full py-3 sm:py-3.5 
                        bg-rose-600 hover:bg-rose-700 
                        text-white font-medium text-sm sm:text-base 
                        rounded-xl transition-all duration-300 
                        transform hover:scale-105
                      "
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fixed Bottom Cart Summary Box */}
      {showCartSummary && (
        <div className="
          fixed bottom-0 left-0 w-full h-20 
          bg-gray-900/95 backdrop-blur-md border-t border-rose-600/40 
          shadow-2xl flex items-center justify-between px-6 
          z-50 animate-slide-up
        ">
          <div className="flex items-center gap-4">
            <div className="relative">
              <ShoppingCart size={28} className="text-rose-400" />
              <span className="
                absolute -top-2 -right-2 
                bg-red-600 text-white text-xs font-bold 
                rounded-full w-6 h-6 flex items-center justify-center shadow-md
              ">
                {cartCount}
              </span>
            </div>
            <div>
              <p className="font-semibold text-white text-base">
                {cartCount} items in cart
              </p>
              <p className="text-sm text-gray-300">
                Total: <span className="font-bold text-rose-400">
                  PKR {totalPrice.toLocaleString('en-PK', { minimumFractionDigits: 2 })}
                </span>
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/cart')}
            className="
              bg-gradient-to-r from-rose-600 to-pink-600 
              text-white font-semibold py-2 px-6 rounded-lg 
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-rose-500/50
            "
          >
            View Cart
          </button>

          <button
            onClick={() => setShowCartSummary(false)}
            className="text-gray-400 hover:text-white absolute top-2 right-2 p-1"
          >
            <X size={20} />
          </button>
        </div>
      )}
    </>
  );
}