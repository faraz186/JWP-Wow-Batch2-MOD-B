import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addCart, removeAddToCart } from "../store/slices/addToCart";

export default function ProductCard({
  image,
  title,
  desc,
  product,
  removeCart,
}) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        {removeCart ? (
          <Button
            variant="contained"
            onClick={() => {
              dispatch(removeAddToCart(product));
            }}
          >
            REMOVE
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => {
              dispatch(addCart(product));
            }}
          >
            ADD TO CART
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
