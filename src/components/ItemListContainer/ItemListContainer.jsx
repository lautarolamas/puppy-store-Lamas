import React, { useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { products } from "../../mock/mockObjects";
import { useEffect } from "react";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    }).then((res) => {
      setItems(products);
    });
  }, []);

  return (
    <div>
      <div> {greeting} ARNES PARA PERROS </div>
      <ItemList items={items} />
    </div>
  );
};
