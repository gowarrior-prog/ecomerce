// src/pages/Cart.jsx
import { useCart } from './CartContext';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, addToCart, decreaseQuantity, removeItem, cartCount } = useCart();

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 5000 ? 0 : 500; // Free over PKR 5000
  const tax = subtotal * 0.17; // 17% tax (you can change)
  const total = subtotal + shipping + tax;

  const handleRemoveItem = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      removeItem(id);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white pt-24 px-4 flex items-center justify-center">
        <div className="text-center max-w-md">
          <ShoppingBag size={80} className="mx-auto mb-6 text-gray-600" />
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-lg text-gray-400 mb-8">
            Looks like you haven't added anything yet. Let's change that!
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-rose-500/30 transform hover:-translate-y-1"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4 md:mb-0">
            Your Cart
            <span className="text-rose-500 ml-3">({cartCount})</span>
          </h1>
          <Link
            to="/"
            className="flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="
                  flex flex-col sm:flex-row gap-6 
                  bg-gray-900/70 backdrop-blur-md border border-gray-800 
                  rounded-2xl p-6 transition-all duration-300 hover:border-rose-600/40 hover:shadow-xl
                "
              >
                {/* Image */}
                <div className="w-full sm:w-32 h-32 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl border border-gray-700"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-400 hover:text-red-300 transition-colors p-1"
                      title="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  <p className="text-rose-400 font-bold text-xl mb-4">
                    PKR {item.price.toFixed(0)}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-4 mb-4">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={18} />
                    </button>

                    <span className="text-xl font-bold min-w-[40px] text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => addToCart(item)}
                      className="w-10 h-10 flex items-center justify-center bg-rose-600 hover:bg-rose-700 rounded-full transition"
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  {/* Total for this item */}
                  <p className="text-gray-300">
                    Item Total: <span className="font-semibold text-white">PKR {(item.price * item.quantity).toFixed(0)}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Order Summary */}
          <div className="lg:col-span-1">
            <div className="
              lg:sticky lg:top-24 
              bg-gray-900/90 backdrop-blur-lg border border-gray-800 
              rounded-2xl p-6 shadow-2xl
            ">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>PKR {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-400" : ""}>
                    {shipping === 0 ? "Free" : `PKR ${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Estimated Tax (17%)</span>
                  <span>PKR {tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-rose-400">PKR {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Free Shipping Progress */}
              <div className="mb-6">
                <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
                  <div
                    className="bg-gradient-to-r from-rose-500 to-pink-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((subtotal / 5000) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 text-center">
                  {subtotal >= 5000
                    ? "You've unlocked free shipping! 🎉"
                    : `Add PKR ${(5000 - subtotal).toFixed(0)} more for free shipping`}
                </p>
              </div>

              {/* Buttons */}
              <div className="space-y-4">
                <Link
                  to="/checkout"
                 className="
                  w-full block text-center py-4 bg-gradient-to-r from-rose-600 to-pink-600 
                  text-white font-bold text-lg rounded-xl 
                  hover:from-rose-700 hover:to-pink-700 
                  transition-all duration-300 transform hover:scale-[1.02] shadow-lg
                ">
                  Proceed to Checkout
                </Link>

                <Link
                  to="/"
                  className="
                    w-full block py-4 bg-transparent border-2 border-gray-600 
                    text-white font-medium text-lg rounded-xl text-center
                    hover:bg-gray-800 hover:border-gray-500 
                    transition-all duration-300
                  "
                >
                  Continue Shopping
                </Link>
                {/* <Link
                  to="/checkout"
                  className="w-full py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Proceed to Checkout
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}