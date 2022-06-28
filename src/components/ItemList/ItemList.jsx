import React from "react";
import Item from "../Item/Item";

export const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        columnGap: "20px",
        rowGap: "20px",
      }}
    >
      {items.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
};
