import React from "react";

import {
  Box,
  VStack,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import Swal from "sweetalert2";

export const Form = ({ cart, priceTotalCart, saveOrder }) => {
  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    if (!e.target.value) {
      setFormErrors({ ...formErrors, [e.target.name]: true });
    } else {
      setFormErrors({ ...formErrors, [e.target.name]: false });
      setBuyer({
        ...buyer,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const order = {
        buyer,
        cart,
        priceTotalCart,
        status: "GENERATED",
        timestamp: serverTimestamp(),
      };

      saveOrder(order);
    }
  };

  const validateForm = () => {
    resetFormErrors();
    let validForm = true;

    if (!buyer.name) {
      Swal.fire("Uuups", "Por favor revisa el formato del nombre", "warning");
      // setFormErrors((formErrors) => ({ ...formErrors, name: true }));
      validForm = false;
    }
    if (
      !buyer.phone ||
      !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(buyer.phone)
    ) {
      Swal.fire("Uuups", "Por favor revisa el formato del teléfono", "warning");
      // setFormErrors((formErrors) => ({ ...formErrors, phone: true }));
      validForm = false;
    }
    if (
      !buyer.email ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(buyer.email)
    ) {
      Swal.fire("Uuups", "Por favor revisa el formato del email", "warning");
      // setFormErrors((formErrors) => ({ ...formErrors, email: true }));
      validForm = false;
    }

    return validForm;
  };

  const resetFormErrors = () => {
    setFormErrors({ name: false, phone: false, email: false });
  };
  return (
    <form onSubmit={handleSubmit}>
      <WrapItem>
        <Box bg="white" borderRadius="lg">
          <Box m={8} color="#0B0E3F">
            <VStack spacing={5}>
              <FormControl isRequired>
                <FormLabel>Nombre y Apellido</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsPerson color="gray.800" />}
                  />
                  <Input
                    name="name"
                    type="text"
                    size="md"
                    error={formErrors.name}
                    helperText={
                      formErrors.name && "Debe indicar su nombre y apellido"
                    }
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Telefono</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdPhone color="gray.800" />}
                  />
                  <Input
                    name="phone"
                    type="cel"
                    size="md"
                    error={formErrors.phone}
                    helperText={
                      formErrors.phone &&
                      "Debe indicar un número de teléfono válido"
                    }
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Mail</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdOutlineEmail color="gray.800" />}
                  />
                  <Input
                    name="email"
                    type="email"
                    size="md"
                    error={formErrors.email}
                    helperText={
                      formErrors.email &&
                      "Debe indicar una dirección de email válida"
                    }
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl float="right">
                <Button
                  type="submit"
                  variant="solid"
                  bg="#0D74FF"
                  color="white"
                  _hover={{}}
                >
                  Confirmar compra
                </Button>
              </FormControl>
            </VStack>
          </Box>
        </Box>
      </WrapItem>
    </form>
  );
};
