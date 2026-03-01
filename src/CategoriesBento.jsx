// src/components/CategoriesBento.jsx
export default function CategoriesBento() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-16 md:mb-24">
          Explore Our <span className="text-rose-500">World</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 auto-rows-fr">
          {/* Large hero box */}
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-rose-900/40 to-black rounded-3xl overflow-hidden border border-white/10 group relative">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Women's Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-black text-white">Women's</h3>
                <p className="text-xl text-gray-200 mt-2">Elegance Redefined</p>
              </div>
            </div>
          </div>

          {/* Smaller boxes */}
          <div className="bg-gradient-to-br from-indigo-900/30 to-black rounded-3xl overflow-hidden border border-white/10 group">
            <img
              src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Men's"
              className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-3xl font-bold text-white">Men's</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-900/20 to-black rounded-3xl overflow-hidden border border-white/10 group">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5f92182?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Accessories"
              className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-3xl font-bold text-white">Accessories</h3>
            </div>
          </div>

          <div className="md:col-span-2 bg-gradient-to-br from-rose-950/50 to-black rounded-3xl overflow-hidden border border-white/10 group">
            <img
              src="https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Shoes"
              className="w-full h-80 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-4xl md:text-5xl font-black text-white">Shoes</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}