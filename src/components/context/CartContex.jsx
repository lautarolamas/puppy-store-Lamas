import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCartFromLocalStorage();
  }, []);

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
    setCartInLocalStorage(newCart);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((_item) => _item.id !== id);
    setCart(newCart);
    setCartInLocalStorage(newCart);
  };

  const isInCart = (id) => {
    return cart.some((_item) => _item.id === id);
  };

  const total = () => {
    const total = cart.reduce((prev, next) => prev + next.quantity, 0);
    return total;
  };
  const priceTotalCart = () => {
    return cart.reduce((acc, _item) => {
      return acc + _item.quantity * _item.price;
    }, 0);
  };

  const cartClear = () => {
    setCart([]);
    setCartInLocalStorage([]);
  };

  const quantityInCart = (id) => {
    const item = cart.find((_item) => _item.id === id);
    if (item) {
      return item.quantity;
    }
    return 0;
  };

  const getCartFromLocalStorage = () => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  };

  const setCartInLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        isInCart,
        total,
        priceTotalCart,
        cartClear,
        quantityInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
