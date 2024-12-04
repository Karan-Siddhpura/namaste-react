import { useEffect, useState } from "react";

const useProductDetail = (id) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const json = await data.json();
      setProduct(json);
    } catch (error) {
      console.error("Error in Use Product Details : - " + error);
    }
  };
  return product;
};

export default useProductDetail;
