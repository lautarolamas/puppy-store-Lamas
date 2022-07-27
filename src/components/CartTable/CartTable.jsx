import CartTableRow from "../CartTableRow/CartTableRow";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableContainer,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function CartTable({
  cart,
  priceTotalCart,
  cartClear,
  removeItem,
}) {
  return (
    <TableContainer display={"block"}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Productos a comprar </Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart.map((item) => (
            <CartTableRow key={item.id} item={item} />
          ))}
        </Tbody>
        <Tfoot>
          <Text fontWeight="bold">
            Importe total del carrito : ${priceTotalCart}
          </Text>
          <br></br>
          <Button marginRight="10px" colorScheme="red" onClick={cartClear}>
            Vaciar carrito
          </Button>
          <Button as={Link} to="/checkout" colorScheme="blue">
            TERMINAR COMPRA
          </Button>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
