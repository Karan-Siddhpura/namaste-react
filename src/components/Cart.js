import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="my-5 mx-auto w-9/12">
      <div className="flex justify-center gap-11 mb-2">
        <h1 className="font-bold text-4xl text-center">Cart</h1>
        <button
          className="text-black border-2 border-black px-3  rounded-lg hover:bg-black hover:text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <h1 className="py-72 text-center text-4xl">
          Cart is Empty please add items to cart
        </h1>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((ele, idx) => {
            return <CartItem key={idx} cartItem={ele} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
