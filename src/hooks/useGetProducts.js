import { useEffect, useState } from "react";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const productData = await fetch("https://fakestoreapi.com/products");
      const json = await productData.json();
      setProducts(json);
      return products;
    } catch (error) {
      console.error("Error in Get Product hook: - " + error);
    }
  };
  return products;
};

export default useGetProducts;
