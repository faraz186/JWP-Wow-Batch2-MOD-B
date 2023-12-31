import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import CardCmp from "./components/CardCmp";
import Home from "./pages/Home";
import ProductDetails from "./pages/productDetails";
import { Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="contained">Contained</Button>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
