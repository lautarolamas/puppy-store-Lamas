import React from "react";
import { Text, Tr } from "@chakra-ui/react";

export const CheckoutItems = ({ cart, total }) => {
  return (
    <TableContainer display={"block"}>
      <Table variant="simple">
        <Thead>
          <Tr></Tr>
        </Thead>
        <Tbody>
          {cart.map((item) => (
            <CartTableRow key={item.id} item={item} />
          ))}
        </Tbody>
        <Tfoot>
          <Text fontWeight="bold">EL PRECIO TOTAL DEL CARRITO ES {total}</Text>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
