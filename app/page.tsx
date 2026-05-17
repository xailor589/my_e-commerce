import Banner from "@/components/Banner";
import CategoryList from "@/components/CategoryList";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import SearchBar from "@/components/SearchBar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <Banner />        {/* ຮູບ Banner ໂຄສະນາ */}
      <SearchBar />     {/* ຊ່ອງຄົ້ນຫາສິນຄ້າ */}
      <CategoryList />  {/* ໝວດໝູ່ສິນຄ້າ */}
      <ProductList />
      {children}
    </div>
  );
}