const categories = [
  { name: "Shoes",       icon: "👟", count: "128 items" },
  { name: "Clothes",     icon: "👕", count: "256 items" },
  { name: "Bags",        icon: "👜", count: "94 items"  },
  { name: "Accessories", icon: "⌚", count: "73 items"  },
];

export default function CategoryList() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl font-black text-white whitespace-nowrap">Categories</h2>
        <div className="flex-1 h-px bg-white/6" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="group relative bg-gray-900 border border-white/7 rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:border-yellow-400/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 transition-all duration-250 overflow-hidden"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none rounded-2xl" />

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-yellow-400/8 flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-250">
              {cat.icon}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold text-sm truncate">{cat.name}</div>
              <div className="text-white/35 text-xs mt-0.5">{cat.count}</div>
            </div>

            {/* Arrow */}
            <span className="text-yellow-400/40 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-200 text-sm">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}