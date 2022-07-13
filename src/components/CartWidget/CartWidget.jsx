import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Icon, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContex";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const Contexto = useContext(CartContext);

  return (
    <Button as={Link} to="/cart">
      <Icon as={ShoppingCartIcon} />
      {Contexto.total() == 0 ? <></> : <Text ml={2}>{Contexto.total()}</Text>}
    </Button>
  );
}
