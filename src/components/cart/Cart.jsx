import React from "react";
import MessageUs from "../contact/MessageUs";
import ItemDetail from "./ItemDetail";
import CartItems from "./CartItems";

const Cart = () => {
  return (
    <div className="flex flex-col gap-[84px] items-center w-full">
      <ItemDetail />
      <ItemDetail />
      <ItemDetail />
      <MessageUs />
    </div>
  );
};

export default Cart;
