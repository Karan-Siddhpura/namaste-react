import React from "react";

const ProductCard = (props) => {
  const { title, image, price, rating } = props?.productData;
  return (
    <div className="p-3 m-5 bg-gray-200 w-72 cursor-pointer hover:drop-shadow-2xl rounded-lg">
      <div className="w-[100%] h-60 mb-2">
        <img className="w-[100%] h-[100%] rounded-lg" src={image} />
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold">{title}</p>

        <p>₹ {price}</p>
        <p>Rating : - {rating?.rate}</p>
      </div>
    </div>
  );
};

export default ProductCard;
