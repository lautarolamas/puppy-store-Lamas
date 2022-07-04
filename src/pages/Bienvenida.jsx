import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoPawSharp, IoCar, IoChatbubbleEllipsesSharp } from "react-icons/io5";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>La felicidad que se merece tu mascota</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Ofrecemos una amplia variedad de productos con los cuales podran
            crear momentos inolvidables junto a tu mascota.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={IoPawSharp} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Alimentos de primera marca"}
            />
            <Feature
              icon={<Icon as={IoCar} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Envíos a domicilio"}
            />
            <Feature
              icon={
                <Icon
                  as={IoChatbubbleEllipsesSharp}
                  color={"purple.500"}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Contamos con un chat de consultas"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://www.prensalibre.com/wp-content/uploads/2020/02/Historias_MiMasota_0000_Layer-4.jpg?resize=1024,671"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
