import React, { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { counter } = useSelector((state) => state.counterReducer);
  console.log("counter", counter);
  return <div>Counter : {counter} </div>;
};

export default Header;
