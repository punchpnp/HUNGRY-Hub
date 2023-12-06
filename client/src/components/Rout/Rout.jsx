import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Product from "../Product/Product";

function Rout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default Rout;
