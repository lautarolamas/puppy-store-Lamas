import React from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  HStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Cart from "./Cart";
export const CartContainer = () => {
  return (
    <Container bg="#ffff" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 5, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Resumen de la compra</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    A continuación se encuentran los productos que vas a comprar
                  </Text>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
