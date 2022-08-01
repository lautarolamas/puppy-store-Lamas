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
            <HStack
              mt={{ lg: 10, md: 10 }}
              spacing={5}
              px={5}
              alignItems="flex-start"
            >
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>
                      {" "}
                      A continuación se encuentran los productos que vas a
                      comprar
                    </Heading>

                    <Cart></Cart>
                  </Box>
                </WrapItem>
              </Wrap>
            </HStack>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
