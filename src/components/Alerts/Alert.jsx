import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export const AlertModal = (status, titulo, subtitulo) => {
  return (
    <Alert
      status={status}
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {titulo}
      </AlertTitle>
      <AlertDescription maxWidth="sm">{subtitulo}</AlertDescription>
    </Alert>
  );
};
