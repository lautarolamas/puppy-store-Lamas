import React from "react";
import Item from "../Item/Item";

export const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto auto ",
      }}
    >
      {items.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
};
