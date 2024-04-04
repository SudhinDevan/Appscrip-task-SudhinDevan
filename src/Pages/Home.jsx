import { useEffect, useState } from "react";
import Filters from "../Component/Filters";
import Header from "../Component/Header";
import MenuItems from "../Component/MenuItems";
import ProductCard from "../Component/ProductCard";
import TopBanner from "../Component/TopBanner";
import BannerItems from "../Component/BannerItems";
import Footer from "../Component/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <>
      <TopBanner />
      <Header />
      <MenuItems />
      <hr />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl mt-8 mb-3">DISCOVER OUR PRODUCTS</h1>
        <h3 className="w-[580px] justify-center text-pretty">
          <span className="ml-3">Lorem, ipsum dolor sit amet consectetur</span>{" "}
          adipisicing elit. Odio rerum beatae quod{" "}
          <span className="mr-3"> consectetur hic perferendis ipsum dolor</span>{" "}
          sit amet consectetur adipisicing
        </h3>
      </div>
      <div className="flex flex-col px-20">
        <div className="w-full">
          <div className="w-full block">
            <hr className="mt-10" />
          </div>
        </div>
        <BannerItems filter={filter} onFilterChange={handleFilterChange} />
        <div className="w-full">
          <div className="w-full block">
            <hr className="mt-6" />
          </div>
        </div>
        <div className="flex">
          {filter && <Filters />}
          <div className="ml-10 flex flex-wrap justify-between">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                productImage={product.image}
                productName={product.title}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
