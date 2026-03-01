// src/pages/Checkout.jsx
import { useState } from 'react';
import { useCart } from './CartContext'; // adjust path
import { CreditCard, Truck, Banknote, CheckCircle, Tag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cartItems, cartCount } = useCart();
  const navigate = useNavigate();

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    phone: '',
    email: '',
    promoCode: '',
  });

  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Calculations
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 5000 ? 0 : 500;
  const tax = subtotal * 0.17;
  const discount = appliedDiscount;
  const total = subtotal + shipping + tax - discount;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const applyPromo = () => {
    if (formData.promoCode === 'LUXE10') {
      setAppliedDiscount(subtotal * 0.10); // 10% off example
      alert('Promo code applied! 10% discount added.');
    } else {
      alert('Invalid promo code.');
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.address || !formData.phone) {
      alert('Please fill all required fields.');
      return;
    }
    alert('Order placed successfully! Thank you for shopping with LUXE Mart.');
    // Here you can clear cart, redirect to thank you page, etc.
    // Example: navigate('/thank-you');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white pt-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={80} className="mx-auto mb-6 text-gray-600" />
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-lg text-gray-400 mb-8">Add items to proceed to checkout.</p>
          <Link
            to="/shop"
            className="inline-flex px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-full font-semibold transition-all"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-black text-center md:text-left mb-12">
          Checkout
          <span className="text-rose-500 ml-3">({cartCount} items)</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left - Forms & Payment */}
          <div className="lg:col-span-2 space-y-10">
            {/* Shipping Address */}
            <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Truck size={24} className="text-rose-400" /> Shipping Address
              </h2>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-rose-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-rose-500 transition"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-300 mb-2">Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-rose-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-rose-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-rose-500 transition"
                  />
                </div>
              </form>
            </div>

            {/* Payment Method */}
            <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CreditCard size={24} className="text-rose-400" /> Payment Method
              </h2>

              <div className="space-y-4">
                <label className="flex items-center gap-3 p-4 bg-gray-800 rounded-xl cursor-pointer hover:bg-gray-700 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="w-5 h-5 accent-rose-500"
                  />
                  <CreditCard size={20} />
                  <span className="font-medium">Credit / Debit Card</span>
                </label>

                <label className="flex items-center gap-3 p-4 bg-gray-800 rounded-xl cursor-pointer hover:bg-gray-700 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="w-5 h-5 accent-rose-500"
                  />
                  <Truck size={20} />
                  <span className="font-medium">Cash on Delivery</span>
                </label>

                <label className="flex items-center gap-3 p-4 bg-gray-800 rounded-xl cursor-pointer hover:bg-gray-700 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={() => setPaymentMethod('bank')}
                    className="w-5 h-5 accent-rose-500"
                  />
                  <Banknote size={20} />
                  <span className="font-medium">Bank Transfer</span>
                </label>
              </div>
            </div>

            {/* Promo Code */}
            <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Tag size={24} className="text-rose-400" /> Promo Code
              </h2>

              <div className="flex gap-3">
                <input
                  type="text"
                  name="promoCode"
                  value={formData.promoCode}
                  onChange={handleChange}
                  placeholder="Enter promo code"
                  className="flex-1 p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-rose-500 transition"
                />
                <button
                  onClick={applyPromo}
                  className="px-6 py-4 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Right - Sticky Order Summary */}
          <div className="lg:col-span-1">
            <div className="
              lg:sticky lg:top-24 
              bg-gray-900/90 backdrop-blur-lg border border-gray-800 
              rounded-2xl p-8 shadow-2xl
            ">
              <h2 className="text-2xl font-bold mb-8">Order Summary</h2>

              <div className="space-y-5 mb-8">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>PKR {subtotal.toLocaleString('en-PK')}</span>
                </div>

                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-400" : ""}>
                    {shipping === 0 ? "Free" : `PKR ${shipping.toLocaleString('en-PK')}`}
                  </span>
                </div>

                <div className="flex justify-between text-gray-300">
                  <span>Estimated Tax (17%)</span>
                  <span>PKR {tax.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-400">
                    <span>Discount (Promo)</span>
                    <span>- PKR {discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="border-t border-gray-700 pt-5 mt-5">
                  <div className="flex justify-between text-2xl font-bold">
                    <span>Grand Total</span>
                    <span className="text-rose-400">PKR {total.toLocaleString('en-PK', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="
                  w-full py-5 bg-gradient-to-r from-rose-600 to-pink-600 
                  text-white font-bold text-lg rounded-xl 
                  hover:from-rose-700 hover:to-pink-700 
                  transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-rose-500/40
                "
              >
                Place Order
              </button>

              <p className="text-center text-sm text-gray-400 mt-6">
                Secure checkout • 100% safe payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}