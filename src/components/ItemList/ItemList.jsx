import React from "react";
import Item from "../Item/Item";

export const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        alignContent: "flex-start",
      }}
    >
      {items.map((item) => {
        return (
          <div
            style={{
              margin: "30px",
            }}
            key={item.id}
          >
            <Item item={item} />
          </div>
        );
      })}
    </div>
  );
};
