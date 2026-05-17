type Product = {
  id: number;
  name: string;
  price: string;
  discount: string;
  rating: number;
  status: "In Stock" | "Out of Stock";
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Nike Air Max",
    price: "$120",
    discount: "20%",
    rating: 4.5,
    status: "In Stock",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Adidas Hoodie",
    price: "$80",
    discount: "10%",
    rating: 4.2,
    status: "Out of Stock",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Leather Bag",
    price: "$95",
    discount: "15%",
    rating: 4.8,
    status: "In Stock",
    image: "https://via.placeholder.com/300",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold">All Products</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="rounded-xl bg-white p-4 shadow hover:shadow-lg transition"
          >
            {/* Product Image */}
            <img
              src={p.image}
              alt={p.name}
              className="h-48 w-full rounded-lg object-cover"
            />

            {/* Name */}
            <h2 className="mt-3 text-lg font-semibold">{p.name}</h2>

            {/* Price + Discount */}
            <div className="mt-1 flex items-center gap-3">
              <p className="font-bold text-blue-600">{p.price}</p>
              <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-600">
                -{p.discount}
              </span>
            </div>

            {/* Rating */}
            <p className="mt-2 text-sm text-yellow-500">
              ⭐ {p.rating} / 5
            </p>

            {/* Status */}
            <p
              className={`mt-2 text-sm font-medium ${
                p.status === "In Stock"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {p.status}
            </p>

            <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
              View Product
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}