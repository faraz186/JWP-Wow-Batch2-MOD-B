import React from "react";
import { addCounter, minusCounter } from "../store/slices/counterSlice";
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch(addCounter());
  };
  const minusCount = () => {
    dispatch(minusCounter());
  };

  return (
    <>
      <button onClick={addCount}>Button</button>
      <button onClick={minusCount}> minus Button</button>
    </>
  );
};

export default Button;
