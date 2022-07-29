import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  HStack,
  Wrap,
  WrapItem,
  Table,
  Tr,
} from "@chakra-ui/react";

import CartTableRow from "../CartTableRow/CartTableRow";
import { CartContext } from "../context/CartContex";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";
import {
  getProduct,
  setOrder,
  updateProductStock,
} from "../../firebase/apiFirebase";

export default function Checkout() {
  const { cart, priceTotalCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!cart.length) {
      navigate("/");
    }
  }, []);

  const saveOrder = (order) => {
    setError("");
    console.log("SAVE ORDER");
    // setIsLoading(true);

    checkStock(order.cart).then(async (stockResponse) => {
      if (stockResponse.some((resp) => resp === false)) {
        setError("No tenemos stock suficiente para procesar tu orden.");
        console.log("CHECKSTOCK");
        // setIsLoading(false);
      } else {
        const orderId = await setOrder(order);
        updateStock(order.cart);
        setOrderId(orderId);
        console.log("CHECKSTOCK ELSE ");
      }
    });
  };

  const updateStock = (cart) => {
    cart.forEach(async (orderProduct) => {
      await updateProductStock(orderProduct.id, orderProduct.quantity);
    });
  };

  const checkStock = async (cart) => {
    const promises = cart.map(async (orderProduct) => {
      const product = await getProduct(orderProduct.id);
      if (product.stock < orderProduct.quantity) {
        return false;
      } else {
        return true;
      }
    });

    return Promise.all(promises);
  };

  return (
    <Container bg="#ffff" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 10, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Resumen de la compra</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    A continuación se encuentran los productos que vas a comprar
                  </Text>

                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <Table>
                      {cart.map((item) => (
                        <CartTableRow isCheckout={true} item={item} />
                      ))}
                      <br></br>
                      <Tr>
                        {" "}
                        <Text fontWeight="bold">
                          Importe total a pagar : ${priceTotalCart()}
                        </Text>
                      </Tr>
                    </Table>
                  </HStack>
                </Box>
              </WrapItem>
              <Form cart={cart} saveOrder={saveOrder} />
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
