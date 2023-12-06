import React, { useState } from "react";

import Nav from "./components/Nav/Nav";
import Rout from "./components/Rout/Rout.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Productdetail from "./components/Product/Productdetail.js";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  // product detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  // filter product
  const [product, setProduct] = useState(Productdetail);
  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.cat === product;
    });
    setProduct(change);
  };

  // product detail
  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
