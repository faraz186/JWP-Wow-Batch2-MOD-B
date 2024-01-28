import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.productReducer);
  console.log("selector", selector);
  useEffect(() => {
    // fetchData();
    dispatch(fetchProduct());
  }, []);

  //   const fetchData = async () => {
  //     try {
  //       const data = await axios.get("https://fakestoreapi.com/products");
  //       console.log(data.data, "data");
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  return <div>Home</div>;
};

export default Home;
