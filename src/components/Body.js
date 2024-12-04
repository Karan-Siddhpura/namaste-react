import Shimmer from "./Shimmer.js";
import useGetProducts from "../hooks/useGetProducts.js";
import ProductCard from "./ProductCard.js";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Body = () => {
  const products = useGetProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  const handleSearch = () => {
    const filteredList = products.filter((ele, idx) => {
      return ele.title.toLowerCase().includes(searchInput.toLowerCase());
    });

    setFilteredProducts(filteredList);
  };

  const handleRating = () => {
    const filteredList = products.filter((ele, idx) => {
      return ele.rating.rate > 4;
    });
    setFilteredProducts(filteredList);
  };
  return (
    <>
      <div className="p-3 flex gap-5 justify-center">
        <div className="flex gap-4 items-center">
          <input
            type="text"
            className="w-56 h-10 border-black border-2  rounded-lg"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              console.log(searchInput);
            }}
          />
          <button
            className="border-black border-2 px-4 py-2 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="border-black border-2 px-4 py-2 rounded-lg"
          onClick={handleRating}
        >
          Top Rated
        </button>
        <button
          className="border-black border-2 px-4 py-2 rounded-lg"
          onClick={() => {
            setFilteredProducts(products);
          }}
        >
          Reset Filter
        </button>
      </div>

      {filteredProducts?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center">
          {filteredProducts.map((ele, idx) => {
            return (
              <Link to={`/product/${ele.id}`}>
                <ProductCard key={idx} productData={ele} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
