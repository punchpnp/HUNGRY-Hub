import React from "react";
import { Routes, Route } from "react-router-dom";

function Rout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default Rout;
