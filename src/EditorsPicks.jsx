// src/components/NewArrivals.jsx

const arrivals = [
  {
    id: 1,
    name: "Midnight Velvet Gown",
    price: 890.00,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tag: "Just Landed",
  },
  {
    id: 2,
    name: "Gold Vermeil Chain Necklace",
    price: 420.00,
    image: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tag: "New Drop",
  },
  {
    id: 3,
    name: "Suede Block Heel Sandals",
    price: 320.00,
    image: "https://images.unsplash.com/photo-1543168251-058eb8992798?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tag: "Seasonal Essential",
  },
  {
    id: 4,
    name: "Silk Wrap Blouse",
    price: 280.00,
    image: "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tag: "Just Landed",
  },
  {
    id: 5,
    name: "Leather Crossbody Bag",
    price: 550.00,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5f92182?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tag: "New Arrival",
  },
  {
    id: 6,
    name: "Tailored Wool Blazer",
    price: 680.00,
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tag: "Fresh In",
  },
];

export default function NewArrivals() {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(244,63,94,0.12),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            New <span className="text-rose-500">Arrivals</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Fresh drops curated for the season — limited pieces, timeless appeal.
          </p>
        </div>

        <div className="
          grid 
          grid-cols-2             /* 2 per row on mobile - attractive side-by-side */
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-5 sm:gap-6 lg:gap-8
        ">
          {arrivals.map((item) => (
            <div
              key={item.id}
              className="
                group relative 
                bg-white/5 backdrop-blur-md border border-white/10 
                rounded-xl sm:rounded-2xl overflow-hidden 
                shadow-lg hover:shadow-2xl 
                transition-all duration-500 hover:-translate-y-2
              "
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x533/111/eee?text=New+Arrival";
                  }}
                />
                <span className="
                  absolute top-3 sm:top-4 left-3 sm:left-4 
                  bg-rose-600 text-white text-xs sm:text-sm font-bold 
                  px-3 py-1 rounded-full uppercase tracking-wider shadow-md
                  transform group-hover:scale-105 transition-transform
                ">
                  {item.tag}
                </span>
              </div>

              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 group-hover:text-rose-400 transition-colors truncate">
                  {item.name}
                </h3>
                <p className="text-lg sm:text-xl font-bold text-white">
                  ${item.price.toFixed(2)}
                </p>
                <button className="
                  mt-4 sm:mt-5 w-full py-3 sm:py-3.5 
                  bg-transparent border-2 border-rose-500 hover:bg-rose-600 
                  text-white font-medium text-sm sm:text-base 
                  rounded-xl transition-all duration-300
                ">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a
            href="/new-arrivals"
            className="inline-flex items-center px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-rose-500/30 transform hover:-translate-y-1"
          >
            View All New Arrivals <span className="ml-3">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}