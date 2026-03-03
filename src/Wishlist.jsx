// src/pages/Wishlist.jsx
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, X } from 'lucide-react';
import { useCart } from './CartContext'; // adjust path
import { useState, useEffect } from 'react';
import { products } from './dataproducts'; // ← Import real products

export default function Wishlist() {
  const { addToCart } = useCart();

  const [likedProducts, setLikedProducts] = useState(() => {
    const saved = localStorage.getItem('luxe-mart-liked');
    return saved ? JSON.parse(saved) : {};
  });

  // Get only liked products with REAL data
  const likedItems = Object.keys(likedProducts)
    .filter(id => likedProducts[id])
    .map(id => {
      // Find real product by id
      const realProduct = products.find(p => p.id === parseInt(id));
      return realProduct || {
        id: parseInt(id),
        name: `Product ${id} (not found)`,
        price: 25000,
        image: "https://via.placeholder.com/300?text=Product+Not+Found",
      };
    });

  const removeFromWishlist = (id) => {
    setLikedProducts(prev => {
      const updated = { ...prev, [id]: false };
      localStorage.setItem('likedProducts', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl md:text-5xl font-black">
            My Wishlist <Heart className="inline text-rose-500 fill-rose-500" size={36} />
          </h1>
          <Link
            to="/shop"
            className="text-rose-400 hover:text-rose-300 font-medium flex items-center gap-2"
          >
            Continue Shopping →
          </Link>
        </div>

        {likedItems.length === 0 ? (
          <div className="text-center py-20">
            <Heart size={80} className="mx-auto mb-6 text-gray-600" />
            <h2 className="text-3xl font-bold mb-4">Your Wishlist is Empty</h2>
            <p className="text-lg text-gray-400 mb-8">
              You haven't liked any products yet. Start exploring!
            </p>
            <Link
              to="/featured"
              className="inline-flex px-10 py-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-rose-500/30"
            >
              Browse Featured Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {likedItems.map(item => (
              <div
                key={item.id}
                className="
                  bg-gray-900/70 backdrop-blur-md border border-gray-800 
                  rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl 
                  transition-all duration-300 hover:-translate-y-2
                "
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300?text=Image+Failed";
                    }}
                  />
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 p-2 bg-black/60 rounded-full hover:bg-black/80 transition"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2 truncate">
                    {item.name}
                  </h3>
                  <p className="text-rose-400 font-bold mb-4">
                    PKR {item.price.toLocaleString('en-PK')}
                  </p>

                  <button
                    onClick={() => addToCart(item)}
                    className="
                      w-full py-3 bg-rose-600 hover:bg-rose-700 
                      text-white font-medium rounded-xl transition-all
                      flex items-center justify-center gap-2
                    "
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}