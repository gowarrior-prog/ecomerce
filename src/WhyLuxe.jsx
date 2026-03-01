// src/components/WhyLuxe.jsx
export default function WhyLuxe() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Subtle background texture or particles if you add later */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(244,63,94,0.08),transparent_40%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Crafted for <span className="text-rose-500">Timeless</span> Moments
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Where elegance meets exclusivity. Every piece tells a story of sophistication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors duration-500">
              <span className="text-3xl">✦</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Curated Excellence</h3>
            <p className="text-gray-400">
              Hand-selected from the world's finest artisans and emerging designers.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors duration-500">
              <span className="text-3xl">∞</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Sustainable Luxury</h3>
            <p className="text-gray-400">
              Ethical materials, timeless designs built to last beyond seasons.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors duration-500">
              <span className="text-3xl">🛡️</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Effortless Experience</h3>
            <p className="text-gray-400">
              Seamless shopping, free express shipping, and 30-day returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}