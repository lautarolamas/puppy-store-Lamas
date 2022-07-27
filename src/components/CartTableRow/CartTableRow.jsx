import {
  Badge,
  Text,
  Box,
  Flex,
  Avatar,
  Td,
  Tr,
  Button,
  Icon,
} from "@chakra-ui/react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CartContext } from "../context/CartContex";
import { useContext } from "react";
export default function CartTableRow({ item }) {
  const { picture, title, quantity, price, id } = item;
  const { removeItem } = useContext(CartContext);

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
              {"PRECIO TOTAL" + " : $" + price * quantity}
            </Text>
          </Td>
          <Td>
            <Text fontSize="sm">
              <Button onClick={() => removeItem(id)}>
                <Icon as={DeleteForeverIcon} />
              </Button>
            </Text>
          </Td>
        </Box>
      </Flex>
    </Tr>
  );
}
