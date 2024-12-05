import React from "react";

const CartItem = (props) => {
  console.log(props);
  const { title, price, description, image } = props.cartItem;

  return (
    <div className="flex gap-5 w-[100%] p-7 bg-gray-200 cursor-pointer hover:drop-shadow-lg rounded-lg">
      <div className="w-[25%] ">
        <img src={image} className="w-[100%] h-[100%]" />
      </div>
      <div className="w-[65%] flex flex-col gap-2">
        <p className="font-bold text-lg">{title}</p>
        <p className="text-sm">{description}</p>
        <p className="font-bold text-lg">₹ {price}</p>
      </div>
    </div>
  );
};

export default CartItem;
