import React from "react";
import CartTableRow from "../CartTableRow/CartTableRow";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  // Td,
  TableCaption,
  TableContainer,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function CartTable({ cart, total }) {
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
            Importe total del carrito : ${total}
            {/* &nbsp;({totalInCart} producto/s) */}
          </Text>
          <Button as={Link} to="/checkout" colorScheme="blue">
            TERMINAR COMPRA
          </Button>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
