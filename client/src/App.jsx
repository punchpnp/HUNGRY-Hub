import React from "react";
import Nav from "./components/Nav/Nav";
// import Rout from "./components/Rout/Rout.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        {/* <Rout /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
