import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //   useEffect(() => {}, []);

  const addItem = (item, count) => {
    let newCart = [];
    item.quantity = count;
    if (isInCart(item.id)) {
      newCart = cart.reduce((acc, _item) => {
        if (item.id !== _item.id) {
          return acc.concat(_item);
        } else {
          return acc.concat({
            ..._item,
            quantity: _item.quantity + item.quantity,
          });
        }
      }, []);
    } else {
      newCart = cart.concat(item);
    }

    setCart(newCart);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((_item) => _item.id !== id);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((_item) => _item.id === id);
  };

  function total() {
    const total = cart.reduce((prev, next) => prev + next.quantity, 0);
    return total;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
