import "./index.css";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(0);
  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("El valor no puede ser menor a Cero ( 0 ) ");
    }
  };
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert(
        "La cantidad de productos a agregar, no puede superar el stock disponible "
      );
    }
  };

  return (
    // <div className="main_div">
    <div className="center_div">
      <h1>{count}</h1>
      <div className="btn_div">
        <Tooltip title="Quitar">
          <Button onClick={decrementar}>
            <RemoveIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Agregar al carrrito">
          <Button onClick={sumar}>
            <AddIcon />
          </Button>
        </Tooltip>
      </div>
      {/* <Button onClick={onAdd()}>Agregar al carrito</Button> */}
    </div>
    // </div>
  );
};
