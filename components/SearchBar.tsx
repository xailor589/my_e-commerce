"use client";

import { useState } from "react";

const popular = ["Nike Air Max", "Leather Bag", "Hoodie", "Accessories"];

type Props = {
  value?: string;
  onChange?: (value: string) => void;
};

export default function SearchBar({
  value = "",
  onChange = () => {},
}: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-6 py-4">
      
      {/* SEARCH INPUT */}
      <div
        className={`flex items-center bg-white rounded-2xl border transition-all overflow-hidden ${
          focused
            ? "border-blue-500 shadow-md"
            : "border-gray-300"
        }`}
      >
        <span className="pl-4 text-gray-500">🔍</span>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search products..."
          className="flex-1 p-4 outline-none"
        />

        <button className="bg-blue-600 text-white px-5 py-3 hover:bg-blue-700 transition">
          Search
        </button>
      </div>

      {/* POPULAR TAGS */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {popular.map((item) => (
          <button
            key={item}
            onClick={() => onChange(item)}
            className="text-sm px-3 py-1 bg-gray-200 rounded-full hover:bg-blue-100 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}