import Swal from "sweetalert2";

export const SuccesChekout = () => {
  Swal.fire("Felicitaciones ", "Has finalizado tu compra", "success");
};

export const AgregadoAlCarrito = () => {
  Swal.fire("Se agrego tu producto al carrito correctamente", "", "success");
};
