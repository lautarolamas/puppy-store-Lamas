import { Badge, Text, Box, Flex, Avatar, Td, Tr } from "@chakra-ui/react";
import { CartContext } from "../context/CartContex";
import { useContext } from "react";

export default function CartTableRow({ item }) {
  const { picture, title, quantity, price } = item;
  return (
    <Tr>
      <Flex>
        <Avatar src={picture} />
        <Box ml="3">
          <Td>
            {" "}
            <Text fontWeight="bold">
              {title}
              <Badge ml="1" colorScheme="green">
                Listo para comprar
              </Badge>
            </Text>
          </Td>
          <Td>
            <Text fontSize="sm">
              {quantity} x {price}
            </Text>
          </Td>
          <Td>
            <Text fontSize="sm">
              {"PRECIO * CANTIDAD" + " : $" + price * quantity}
            </Text>
          </Td>
        </Box>
      </Flex>
    </Tr>
  );
}
