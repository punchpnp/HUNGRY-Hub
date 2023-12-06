import React from "react";
import Nav from "./components/Nav/Nav";
import Rout from "./components/Rout/Rout.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Productdetail from "./components/Product/Productdetail.js";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  const searchbtn = (product) => {};
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
