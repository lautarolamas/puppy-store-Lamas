import { React, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
// import { products } from "../../mock/mockObjects";
import { getProduct } from "../../firebase/apiFirebase";
import { SpinnerLoading } from "../SpinnerLoading/SpinnerLoading";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idItem } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getItem();
  }, [idItem]);
  //  CODIGO DE COMO ANTES TRAIA LOS ITEMS
  // useEffect(() => {
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(products);
  //     }, 300);
  //   }).then((res) => {
  //     const item = res.find((item) => item.id == idItem);

  //     setProductDetail(item);
  //   });
  // }, [idItem]);
  const getItem = async () => {
    setIsLoading(true);
    const product = await getProduct(idItem);
    if (!product) {
      navigate("/404");
    } else {
      setItem(product);
      setIsLoading(false);
    }
  };
  return (
    <Container>
      {isLoading ? (
        <SpinnerLoading />
      ) : (
        <Row>
          <ItemDetail item={item} />
        </Row>
      )}
    </Container>
  );
};

export default ItemDetailContainer;
