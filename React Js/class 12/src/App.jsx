import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCounter } from "./store/slices/counterSlice";
import { fetchProduct } from "./store/slices/productSlice";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  // const { counterValue } = useSelector((state) => state.counterReducer);
  // console.log("selector", counterValue);
  // const dispatch = useDispatch();

  return (
    <>
      {/* <h1>COUNTER : {counterValue} </h1>
      <button
        onClick={() => {
          dispatch(addCounter("JAFFAR"));
        }}
      >
        ADD COUNTER
      </button> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
