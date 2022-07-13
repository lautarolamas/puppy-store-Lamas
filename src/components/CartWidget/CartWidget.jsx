// import React from "react";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import styled from "styled-components";

// const Carrito = styled.div`
//   margin-right: 50px;
//   display: flex;
//   color: white;
// `;
// const Cantidad = styled.div`
//   margin-left: 2px;
// `;
// export const CartWidget = ({ cantidad }) => {
//   return (
//     <Carrito>
//       <ShoppingCartIcon />
//       <Cantidad>{cantidad} </Cantidad>
//     </Carrito>
//   );
// };
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Icon, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContex";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { total } = useContext(CartContext);

  return (
    <Button as={Link} to="/cart">
      <Icon as={ShoppingCartIcon} />
      {total === 0 ? <></> : <Text ml={2}>{total}</Text>}
    </Button>
  );
}
