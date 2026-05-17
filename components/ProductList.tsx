import ProductCard, { Product } from "./ProductCard";

const products: Product[] = [
  { id: 1, name: "Nike Air Max",  price: "$120", image: "/assets/images/r.jpg"      },
  { id: 2, name: "Adidas Hoodie", price: "$80",  image: "/assets/images/images.jpg" },
  { id: 3, name: "Leather Bag",   price: "$95",  image: "/assets/images/e.jpg"      },
  { id: 4, name: "Leather Bag",   price: "$95",  image: "/assets/images/s.jpg"      },
  { id: 5, name: "Leather Bag",   price: "$95",  image: "/assets/images/sd.jpg"     },
  { id: 6, name: "Leather Bag",   price: "$95",  image: "/assets/images/we.jpg"     },
  { id: 7, name: "Leather Bag",   price: "$95",  image: "/assets/images/y.jpg"      },
];

export default function ProductList() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-black text-white">Products</h2>
        <button className="text-yellow-400 text-sm font-medium hover:gap-2 flex items-center gap-1 transition-all duration-200">
          View all →
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}