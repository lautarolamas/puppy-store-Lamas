import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Item({ id, price, title, pictureUrl }) {
  console.log(pictureUrl);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" src={pictureUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ textAlign: "center" }} size="small">
          Ver detalle del producto
        </Button>
      </CardActions>
    </Card>
  );
}
