import * as React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";

export default function Item({ item }) {
  const { id, price, title, picture } = item;
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${picture})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(35px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={270}
            width={282}
            objectFit={"cover"}
            src={picture}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {title}
          </Text>

          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ${price}
            </Text>
          </Stack>
          <Stack direction={"row"} align={"center"}>
            <Button colorScheme="blue">
              <Link to={`/item/${id}`}>Ver detalle del producto</Link>
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
