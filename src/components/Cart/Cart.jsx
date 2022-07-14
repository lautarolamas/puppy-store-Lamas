import React, { useContext } from "react";
import { CartContext } from "../context/CartContex";

import CartTable from "../CartTable/CartTable";
export default function Cart() {
  // const Contexto = useContext(CartContext);
  // console.log(Contexto.isInCart(1), "SOY EL NUMERO DE ID ");
  // console.log(Contexto.total(), "SOY total ");
  // console.log(Contexto.cart, "SOY EL CART");
  // let totalCarrito = Contexto.priceTotalCart();
  const { cart, total, priceTotalCart, cartClear, removeItem } =
    useContext(CartContext);
  return (
    <div>
      <CartTable
        cart={cart}
        total={total}
        priceTotalCart={priceTotalCart}
        cartClear={cartClear}
        removeItem={removeItem}
      />
      {/* {Contexto.cart.map((item) => {
        return (
          <div key={item.id}>
            <Item item={item.price} />
            <Item item={item.id} />
            <Item item={item.picture} />
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
      })} */}
    </div>
  );
}
