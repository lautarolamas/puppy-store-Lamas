import React, { useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { products } from "../../mock/mockObjects";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Bienvenida from "../../pages/Bienvenida";
export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 300);
    }).then((res) => {
      if (idCategory == undefined) {
        setItems(res);
      } else {
        const filterCategory = res.filter(
          (item) => item.idCategory == idCategory
        );
        setItems(filterCategory);
      }
    });
  }, [idCategory]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
