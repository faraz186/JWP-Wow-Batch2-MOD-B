import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log("params", id);

  useEffect(() => {
    getSingleData();
  }, []);
  const [product, setProduct] = useState(null);
  const getSingleData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      //   console.log("response getSingleData", response);
      setProduct(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log(product, "product");

  return (
    <>
      <h1>ProductDetails</h1>
      <img src={product?.image} alt="" />
      <h1> {product?.title} </h1>
    </>
  );
};

export default ProductDetails;
