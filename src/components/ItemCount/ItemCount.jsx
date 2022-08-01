import "./index.css";
import React, { useState, useContext } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { CartContext } from "../context/CartContex";
import { AlertModal } from "../Alerts/Alert";
import Swal from "sweetalert2";

export const ItemCount = ({ stock, initial, item }) => {
  const [count, setCount] = useState(initial);
  const Contexto = useContext(CartContext);

  const msjCorrecto = () => {
    Swal.fire(
      "CORRECTO",
      "Se agrego el producto al carrito correctamente",
      "success"
    );
  };
  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      <AlertModal
        status={"error"}
        titulo={"Tienes que agregar por lo menos un elemento al carrito"}
        subtitulo={"saraza"}
      />;
    }
  };
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      <AlertModal
        status={"warning"}
        titulo={
          "La cantidad de productos a agregar, no puede superar el stock disponible "
        }
        subtitulo={"saraza"}
      />;
      Swal.fire(
        "LO SENTIMOS",
        "La cantidad de productos a agregar, no puede superar el stock disponible",
        "warning"
      );
    }
  };

  return (
    <div className="center_div">
      <h1 className="h1">{count}</h1>
      <div className="btn_div">
        <Tooltip title="Quitar">
          <div className="boton">
            <Button onClick={decrementar}>
              <RemoveIcon />
            </Button>
          </div>
        </Tooltip>
        <Tooltip title="Agregar">
          <div className="boton">
            <Button onClick={sumar}>
              <AddIcon />
            </Button>
          </div>
        </Tooltip>
      </div>
      <div className="addToCart">
        {" "}
        <Button onClick={() => Contexto.addItem(item, count)}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};
