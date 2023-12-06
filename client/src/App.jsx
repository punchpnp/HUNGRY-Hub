import React from "react";
import Nav from "./components/Nav/Nav";
import Rout from "./components/Rout/Rout.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
