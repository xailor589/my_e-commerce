"use client";
import { useState } from "react";

export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [added, setAdded]   = useState(false);
  const [wished, setWished] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="group bg-gray-900 border border-white/7 rounded-2xl overflow-hidden hover:border-yellow-400/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300">

      {/* Image */}
      <div className="relative overflow-hidden bg-gray-800 aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Wishlist */}
        <button
          onClick={() => setWished(!wished)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-base hover:scale-110 hover:bg-pink-500/20 transition-all duration-200"
        >
          {wished ? "❤️" : "🤍"}
        </button>

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
          New
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-sm truncate mb-3">{product.name}</h3>

        <div className="flex items-center justify-between mb-4">
          <span className="text-yellow-400 text-xl font-black">{product.price}</span>
          <span className="text-yellow-400 text-xs tracking-widest">★★★★★</span>
        </div>

        <button
          onClick={handleAdd}
          className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-250 ${
            added
              ? "bg-green-500/15 text-green-400 border border-green-500/25"
              : "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 hover:text-gray-900 hover:border-transparent"
          }`}
        >
          {added ? "✓ Added to Cart" : "+ Add to Cart"}
        </button>
      </div>
    </div>
  );
}