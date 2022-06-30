import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";

const Carrito = styled.div`
  margin-right: 50px;
  display: flex;
  color: white;
`;
const Cantidad = styled.div`
  margin-left: 2px;
`;
export const CartWidget = ({ cantidad }) => {
  return (
    <Carrito>
      <ShoppingCartIcon />
      <Cantidad>{cantidad} </Cantidad>
    </Carrito>
  );
};
