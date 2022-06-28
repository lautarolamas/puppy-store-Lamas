import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const ItemDetail = ({ id, title, price, idCategory, picture, key = id }) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>{text}</Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>${price}</ListGroup.Item>
        {/* <ListGroup.Item>Stock: {}</ListGroup.Item> */}
        <ListGroup.Item>
          <u>Codigo de producto:</u> {id}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body></Card.Body>
    </Card>
  );
};

export default ItemDetail;
