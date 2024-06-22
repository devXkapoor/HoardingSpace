import React from "react";
import MessageUs from "../contact/MessageUs";
import ItemDetail from "./ItemDetail";
import CartItems from "./CartItems";

const Cart = () => {
  return (
    <div className="flex flex-col gap-[84px] items-center w-full">
      This is cart Page
      <ItemDetail />
      <ItemDetail />
      <ItemDetail />
      {/* <CartItems /> */}
      <MessageUs />
    </div>
  );
};

export default Cart;
