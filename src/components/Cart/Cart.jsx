import React, { useContext } from "react";
import { CartContext } from "../context/CartContex";
import Button from "@material-ui/core/Button";
import Item from "../Item/Item";

export default function Cart() {
  const Contexto = useContext(CartContext);
  console.log(Contexto.isInCart(1), "SOY EL NUMERO DE ID ");
  console.log(Contexto.total(), "SOY total ");
  console.log(Contexto.cart, "SOY EL CART");
  let totalCarrito = Contexto.priceTotalCart();

  return (
    <div>
      {Contexto.cart.map((item) => {
        return (
          <div key={item.id}>
            <Item item={item.id} />
            <Button onClick={() => Contexto.removeItem(item.id)}>
              Eliminar
            </Button>
            {(totalCarrito, "PRECIO TOTAL DEL CARRITO")}
            {Contexto.total() == 0 ? (
              <>NO HAY ELEMENTOS A MOSTRAR</>
            ) : (
              Contexto.total()
            )}
          </div>
        );
      })}
    </div>
  );
}
