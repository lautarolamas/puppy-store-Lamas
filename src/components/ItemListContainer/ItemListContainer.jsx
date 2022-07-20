import React, { useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../firebase/apiFirebase";
import { SpinnerLoading } from "../SpinnerLoading/SpinnerLoading";
export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { idCategory } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItems();
  }, [idCategory]);

  const getItems = async () => {
    setIsLoading(true);
    const products = await getProducts(idCategory);
    setItems(products);
    setIsLoading(false);
  };

  return (
    <div>{isLoading ? <SpinnerLoading /> : <ItemList items={items} />}</div>
  );
};
