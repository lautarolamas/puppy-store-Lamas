import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  IconButton,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import PetsIcon from "@mui/icons-material/Pets";
import CartWidget from "../CartWidget/CartWidget";
import * as Router from "react-router-dom";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        bg={useColorModeValue("#3182ce", "blue.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems={"center"}
        >
          <Stack direction={"row"} align={"center"}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("white", "white")}
              fontSize={{ base: "20px", md: "26px", lg: "32px" }}
            >
              <Router.Link to={"/"}>
                {" "}
                <PetsIcon />
                Puppy Store
              </Router.Link>
            </Text>
          </Stack>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex mr={3}>
          <CartWidget cantidad={10} />
        </Flex>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7} align={"center"}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <MoonIcon />
              ) : (
                <SunIcon color={"yellow.400"} />
              )}
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Ajustes</MenuItem>
                <MenuItem>Cerrar Sesión</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                as={Router.Link}
                to={navItem.href}
                p={2}
                fontSize={"m"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, clickeado, children }) => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Box display={"row"} p={2} rounded={"md"}>
      <Popover trigger={"hover"} placement={"right"}>
        <Link
          as={Router.Link}
          to={href}
          onClick={clickeado}
          role={"group"}
          _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
        >
          <PopoverTrigger>
            <Stack direction={"row"} align={"center"}>
              <Box>
                <Text
                  transition={"all .3s ease"}
                  _groupHover={{ color: "pink.400" }}
                  fontWeight={500}
                >
                  {label}
                </Text>
              </Box>
              <Flex
                transition={"all .3s ease"}
                transform={"translateX(-10px)"}
                opacity={0}
                _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
                justify={"flex-end"}
                align={"center"}
                flex={1}
              >
                <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
              </Flex>
            </Stack>
          </PopoverTrigger>
        </Link>
        {children && (
          <PopoverContent
            border={0}
            boxShadow={"xl"}
            bg={popoverContentBgColor}
            p={4}
            rounded={"xl"}
            minW={"sm"}
          >
            <Stack>
              {children.map((child) => (
                <DesktopSubSubNav key={child.label} {...child} />
              ))}
            </Stack>
          </PopoverContent>
        )}
      </Popover>
    </Box>
  );
};

const DesktopSubSubNav = ({ label, href, clickeado }) => {
  return (
    <Link
      as={Router.Link}
      to={href}
      onClick={clickeado}
      role={"group"}
      display={"row"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("red.50", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const colorChild = useColorModeValue("gray.700", "gray.200");
  const colorBorder = useColorModeValue("gray.200", "gray.700");

  return (
    <>
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          // as={Router.Link}
          href={href ?? "#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>

        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: "0!important" }}
        >
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
          >
            {children &&
              children.map((child) => (
                <Stack>
                  <Link
                    as={Router.Link}
                    to={child.href}
                    key={child.label}
                    py={2}
                    onClick={child.clickeado}
                    children={child.children}
                  >
                    <Flex
                      py={2}
                      // as={Router.Link}
                      href={child.href ?? "#"}
                      justify={"space-between"}
                      align={"center"}
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      <Text fontWeight={600} color={colorChild}>
                        {child.label}
                      </Text>
                    </Flex>
                  </Link>

                  <Collapse
                    in={isOpen}
                    animateOpacity
                    style={{ marginTop: "0!important" }}
                  >
                    <Stack
                      mt={2}
                      pl={4}
                      borderLeft={1}
                      borderStyle={"solid"}
                      borderColor={colorBorder}
                      align={"start"}
                    >
                      {child.children &&
                        child.children.map((subchild) => (
                          <Link
                            as={Router.Link}
                            to={subchild.href}
                            key={subchild.label}
                            py={2}
                            onClick={subchild.clickeado}
                          >
                            {subchild.label}
                          </Link>
                        ))}
                    </Stack>
                  </Collapse>
                </Stack>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    </>
  );
};

const NAV_ITEMS = [
  {
    label: "Alimentos ",
    href: "/category/alimento",
    children: [
      {
        label: "Alimentos",
        href: "/category/alimento",
      },
    ],
  },

  {
    label: "Accesorios",
    href: "/category/accesorios",
    children: [
      {
        label: "Todos",
        href: "/category/accesorios",
        children: [
          {
            label: "Para perros",
            href: "/category/perro",
          },
          {
            label: "Para gatos",
            href: "/category/gatos",
          },
        ],
      },
    ],
  },
];
