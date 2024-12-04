import React from "react";
import { useParams } from "react-router";
import useProductDetail from "../hooks/useProductDetail";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useProductDetail(id);

  return (
    <>
      <div className="flex justify-center gap-24 py-20">
        <div className="w-96 h-96">
          <img className="w-[100%] h-[100%]" src={product?.image} />
        </div>
        <div className="flex flex-col gap-5 w-[500px]">
          <p className="text-lg font-semibold text-wrap">{product?.title}</p>
          <p className="text-lg font-semibold text-wrap">
            {product?.description}
          </p>
          <p className="text-lg font-semibold text-wrap">{product?.category}</p>
          <p className="text-lg font-semibold text-wrap">
            Rating: - {product?.rating?.rate}
          </p>
          <p className="text-lg font-semibold">Rs. {product?.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
