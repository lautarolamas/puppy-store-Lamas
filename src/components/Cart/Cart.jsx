import React, { useContext } from "react";
import { CartContext } from "../context/CartContex";
import { CartEmpty } from "../CartEmpty/CartEmpty";

import CartTable from "../CartTable/CartTable";
export default function Cart() {
  // let totalCarrito = Contexto.priceTotalCart();
  const { cart, total, priceTotalCart, cartClear, removeItem } =
    useContext(CartContext);
  return (
    <div>
      {Boolean(cart.length) ? (
        <CartTable
          cart={cart}
          total={total}
          priceTotalCart={priceTotalCart}
          cartClear={cartClear}
          removeItem={removeItem}
        />
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}
