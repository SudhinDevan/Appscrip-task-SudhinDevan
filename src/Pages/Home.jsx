import { useEffect, useState } from "react";
import Filters from "../Component/Filters";
import Header from "../Component/Header";
import MenuItems from "../Component/MenuItems";
import ProductCard from "../Component/ProductCard";
import TopBanner from "../Component/TopBanner";
import BannerItems from "../Component/BannerItems";
import Footer from "../Component/Footer";
import HorizontalLine from "../Component/HorizontalLine";
import MiniFooter from "../Component/MiniFooter";

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
      <hr className="mt-3 md:mt-0" />
      <h1 className="md:hidden pl-3 pt-2">
        <span className="text-gray-400">HOME</span> | SHOP
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-4xl mt-2 md:mt-8 mb-3 ">
          DISCOVER OUR PRODUCTS
        </h1>
        <h3 className="md:w-[580px] justify-center text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio rerum
          beatae quod consectetur hic perferendis ipsum dolor sit amet.
        </h3>
      </div>
      <div className="flex flex-col md:px-20">
        <div className="mt-4">
          <HorizontalLine />
        </div>
        <div className="md:hidden flex justify-around mt-3">
          <div className="font-bold">FILTER</div>
          <div className="text-gray-300 text-4xl absolute top-[270px] left-44">
            |
          </div>
          <div className="font-bold">RECOMMENDED</div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-7 mt-1"
          >
            <path
              d="M2.72125 5.99978L7.06792 10.3464C7.58125 10.8598 8.42125 10.8598 8.93458 10.3464L13.2813 5.99978"
              stroke="#292D32"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="md:block hidden">
          <BannerItems filter={filter} onFilterChange={handleFilterChange} />
        </div>
        <div className="w-full">
          <div className="w-full block">
            <hr className="mt-6" />
          </div>
        </div>
        <div className="flex">
          <div className="md:block hidden">{filter && <Filters />}</div>
          <div className="md:ml-10 flex flex-wrap md:justify-between justify-around mt-2 md:mt-0">
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
      <div className="md:block hidden">
        <Footer />
      </div>
      <div className="md:hidden">
        <MiniFooter />
      </div>
    </>
  );
};

export default Home;
