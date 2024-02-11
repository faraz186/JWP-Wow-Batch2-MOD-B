import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/slices/productSlice";
import Navbar from "../components/Navbar";
import { Box, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();

  const { isLoading, products, isError } = useSelector(
    (state) => state.productReducer
  );

  console.log("global state", products);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return isLoading ? (
    <h1>LOADING...</h1>
  ) : (
    <>
      <Navbar />

      <Box mt={"20px"}>
        <Grid container>
          {products.map((product, index) => {
            return (
              <Grid item lg={3}>
                <ProductCard
                  image={product.image}
                  title={product.title}
                  desc={product.description}
                  product={product}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
