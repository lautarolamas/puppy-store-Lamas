import { useState, useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContex";
import { AlertModal } from "../Alerts/Alert";

import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";

const ItemDetail = ({ item }) => {
  const { title, price, picture, descripcion, stock } = item;
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useContext(CartContext);

  const onAdd = (count) => {
    if (count > 0) {
      addItem({ ...item, quantity: count });
      setAddedToCart(true);
    } else {
      <AlertModal
        status={"error"}
        titulo={"Tienes que agregar por lo menos un elemento al carrito"}
        subtitulo={"saraza"}
      />;
    }
  };

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={picture}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "600px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ${price}
              <br></br>
              STOCK DISPONIBLE: {stock}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {descripcion}
              </Text>
              <ItemCount stock={stock} initial={1} item={item} />
            </VStack>
          </Stack>
          <Link to={"/cart"}>
            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              TERMINAR COMPRA
            </Button>
          </Link>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>COMPRA PROTEGIDA </Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
export default ItemDetail;
