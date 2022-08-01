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
import SuccesChekout from "../SweetAlerts/SweetAlerts";
import { AlertModal } from "../Alerts/Alert";

import CartTableRow from "../CartTableRow/CartTableRow";
import { CartContext } from "../context/CartContex";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Form } from "./Form";
import {
  getProduct,
  setOrder,
  updateProductStock,
} from "../../firebase/apiFirebase";

export default function Checkout() {
  const { cart, priceTotalCart, cartClear } = useContext(CartContext);
  const navigate = useNavigate();

  const [orderId, setOrderId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const saveOrder = (order) => {
    setIsLoading(true);

    checkStock(order.cart).then(async (stockResponse) => {
      if (stockResponse.some((resp) => resp === false)) {
        Swal.fire(
          "ERROR",
          "No tenemos stock para procesar tu orden, por favor elige otro producto",
          "error"
        );

        setIsLoading(false);
      } else {
        const orderId = await setOrder(order);
        updateStock(order.cart);
        //SI EL OrderId no viene vacio.
        setOrderId(orderId);
        Swal.fire(
          "FELITACIONES",
          `Finalizaste tu compra, el id de la misma es : ${orderId}`,
          "success"
        );
        cartClear();

        navigate("/");
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

              <Form
                cart={cart}
                priceTotalCart={priceTotalCart()}
                saveOrder={saveOrder}
                isLoading={isLoading}
              />
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
