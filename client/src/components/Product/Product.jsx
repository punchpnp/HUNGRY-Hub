import React, { useState } from "react";

import Productdetail from "./Productdetail";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import "./Product.css";

function Product() {
  const [product, setProduct] = useState(Productdetail);
  const filtterproduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.cat === product;
    });
    setProduct(update);
  };

  const AllProducts = () => {
    setProduct(Productdetail);
  };
  return (
    <>
      <div className="products">
        <h2># Products</h2>
        <p>Home . products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filtterproduct("อาหาร")}>อาหาร</li>
                <li onClick={() => filtterproduct("ขนม")}>ขนม</li>
                <li onClick={() => filtterproduct("ของมือสอง")}>ของมือสอง</li>
                <li onClick={() => filtterproduct("อุปกรณ์กีฬา")}>
                  อุปกรณ์กีฬา
                </li>
              </ul>
            </div>
          </div>

          <div className="productbox">
            <div className="contant">
              {product.map((curElm) => {
                return (
                  <>
                    <div className="box" key={curElm.id}>
                      <div className="img_box">
                        <img src={curElm.Img} alt={curElm.Title} />
                        <div className="icon">
                          <li>
                            <AiOutlineShoppingCart />
                          </li>
                          <li>
                            <BsEye />
                          </li>
                          <li>
                            <AiOutlineHeart />
                          </li>
                        </div>
                      </div>

                      <div className="detail">
                        <p>{curElm.cat}</p>
                        <h3>{curElm.Title}</h3>
                        <h4>{curElm.Price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
