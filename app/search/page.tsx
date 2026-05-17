"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";

type Product = {
  id: number;
  name: string;
  category: string;
};

const products: Product[] = [
  { id: 1, name: "ເກີບກິລາ Nike", category: "ເກີບ" },
  { id: 2, name: "ເກີບແຟຊັ່ນ Adidas", category: "ເກີບ" },
  { id: 3, name: "ເສື້ອ Hoodie", category: "ເສື້ອ" },
  { id: 4, name: "ກະເປົາ Leather", category: "ກະເປົາ" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">🔍 Search Products</h1>

      {/* 👇 CONNECT SEARCH BAR */}
      <SearchBar value={query} onChange={setQuery} />

      {/* RESULTS */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <div key={p.id} className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-bold">{p.name}</h3>
              <p className="text-gray-500">{p.category}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products found 😢</p>
        )}
      </div>
    </main>
  );
}