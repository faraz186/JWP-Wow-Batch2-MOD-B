import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  //global states
  const { addToCart } = useSelector((state) => state.addToCartReducer);
  console.log("addToCart Cart ", addToCart);

  return (
    <>
      <Navbar />

      <Box mt="20px">
        {addToCart.map((product, index) => {
          return (
            <ProductCard
              image={product.image}
              title={product.title}
              desc={product.description}
              product={product}
              removeCart={true}
            />
          );
        })}
      </Box>
    </>
  );
};

export default Cart;
