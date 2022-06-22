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
        return (
          <div style={{}}>
            <Item
              key={item.id}
              id={item.id}
              price={item.price}
              title={item.title}
              pictureUrl={item.picture}
            />
          </div>
        );
      })}
    </div>
  );
};
