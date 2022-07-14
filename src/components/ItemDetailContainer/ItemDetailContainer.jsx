import { React, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../../mock/mockObjects";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 300);
    }).then((res) => {
      const item = res.find((item) => item.id == idItem);

      setProductDetail(item);
    });
  }, [idItem]);

  return (
    <>
      <Container>
        <Row>
          <ItemDetail item={productDetail} />
        </Row>
      </Container>
    </>
  );
};

export default ItemDetailContainer;
