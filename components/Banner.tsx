export default function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-indigo-950/40 to-gray-950 border border-white/10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 min-h-[260px]">

        {/* Glow effects */}
        <div className="absolute -top-32 -right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-lg">
          <span className="inline-block bg-yellow-400/10 text-yellow-400 border border-yellow-400/25 rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase mb-5">
            ✦ Limited Time Offer
          </span>

          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-3">
            Big Sale <br />
            <span className="text-yellow-400 italic">50% OFF</span>
          </h1>

          <p className="text-white/50 text-base font-light mb-8 leading-relaxed">
            Discover the best products at amazing prices.<br />
            Premium quality, unbeatable deals.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold text-sm hover:shadow-xl hover:shadow-yellow-400/30 hover:-translate-y-0.5 transition-all duration-200">
              Shop Now →
            </button>
            <button className="px-7 py-3.5 rounded-xl border border-white/20 text-white/70 font-medium text-sm hover:border-white/50 hover:text-white transition-all duration-200">
              View Catalogue
            </button>
          </div>
        </div>

        {/* Badge */}
        <div className="relative z-10 flex-shrink-0">
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex flex-col items-center justify-center shadow-2xl shadow-yellow-400/30">
            <span className="text-5xl font-black text-gray-900 leading-none">50%</span>
            <span className="text-xs font-bold text-gray-900/60 tracking-widest uppercase">OFF</span>
          </div>
        </div>
      </div>
    </section>
  );
}