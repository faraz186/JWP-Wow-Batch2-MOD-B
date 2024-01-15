import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./style.module.css";

const Examples = () => {
  return (
    <div>
      <h1 className={styles.h1Heading1}>HELLO WORLD</h1>
      <Outlet />
    </div>
  );
};

export default Examples;
