import React, { useContext } from "react";
import { CartContext } from "../context/CartContex";
import Button from "@material-ui/core/Button";

export default function Cart() {
  const Contexto = useContext(CartContext);
  console.log(Contexto.isInCart(1), "SOY EL NUMERO DE ID ");
  console.log(Contexto.total(), "SOY total ");
  console.log(Contexto.cart, "SOY EL CART");
  return (
    <div>
      {/* {items.map((item) => {
        return (
          <div key={item.id}>
            <Item item={item} />
          </div>
        );
      })} */}

      {/* {Contexto.cart.map()} */}
      {Contexto.isInCart(1)}
      {Contexto.total()}
      <Button onClick={() => Contexto.removeItem(1)}>Eliminar</Button>
    </div>
  );
}
