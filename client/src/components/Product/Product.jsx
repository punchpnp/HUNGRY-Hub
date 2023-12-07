import React, { useState } from "react";

import Productdetail from "./Productdetail";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";

import "./Product.css";
import { useAuth0 } from "@auth0/auth0-react";

function Product({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addtocart,
}) {
  //
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const filtterproduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.cat === product;
    });
    setProduct(update);
  };

  //
  const AllProducts = () => {
    setProduct(Productdetail);
  };
  return (
    <>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button className="closebtn" onClick={() => setClose(false)}>
              <IoIosCloseCircle />
            </button>
            {detail.map((curElm) => {
              return (
                <div className="productbox">
                  <div className="img-box">
                    <img src={curElm.Img} alt={curElm.Title} />
                  </div>

                  <div className="detail">
                    <h4>{curElm.cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, exercitationem?
                    </p>
                    <h3>{curElm.Price} ฿</h3>
                    <button>Add to Cart</button>
                  </div>
                </div>
              );
            })}
            <div className="productbox"></div>
          </div>
        </div>
      ) : null}
      <div className="products">
        <h2># Products</h2>
        <p>Home . products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filtterproduct("ร้านข้าวเหนียวไก่")}>
                  ร้านข้าวเหนียวไก่
                </li>
                <li onClick={() => filtterproduct("บรรทัดทอง")}>บรรทัดทอง</li>
                <li onClick={() => filtterproduct("MBK center")}>MBK center</li>
                <li onClick={() => filtterproduct("โรงอาหารหอใน")}>
                  โรงอาหารหอใน
                </li>
                <li onClick={() => filtterproduct("ร้านอาหารตามสั่ง")}>
                  ร้านอาหารตามสั่ง
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
                          {isAuthenticated ? (
                            <li onClick={() => addtocart(curElm)}>
                              <AiOutlineShoppingCart />
                            </li>
                          ) : (
                            <li onClick={() => loginWithRedirect()}>
                              <AiOutlineShoppingCart />
                            </li>
                          )}
                          {/* ตะกร้าสินค้า */}

                          {/* ดูรายละเอียดสินค้า */}
                          <li onClick={() => view(curElm)}>
                            <BsEye />
                          </li>
                          {/* รายการโปรด */}
                          <li>
                            <AiOutlineHeart />
                          </li>
                        </div>
                      </div>

                      <div className="detail">
                        <p>{curElm.cat}</p>
                        <h3>{curElm.Title}</h3>
                        <h4>฿ {curElm.Price}</h4>
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
