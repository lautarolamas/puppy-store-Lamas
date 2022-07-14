import React from "react";
import CartTableRow from "../CartTableRow/CartTableRow";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";
export default function CartTable({ cart, total }) {
  return (
    <TableContainer display={"block"}>
      <Table variant="simple">
        <TableCaption>Listados de producos a comprar </TableCaption>
        <Thead>
          <Tr>
            <Th>Productos a comprar </Th>
            {/* <Th>Precio unitario</Th>
            <Th>Precio total</Th> */}
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
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
