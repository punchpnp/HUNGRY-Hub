import React from "react";
import { Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { FaBahtSign } from "react-icons/fa6";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { BiHeadphone } from "react-icons/bi";
import { CiPercent } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";

import Hungry from "/src/assets/hungry.png";
import Mama from "/src/assets/mama.jpg";

import "./Home.css";
import Homeproduct from "./Homeproduct";

function Home({ detail, view, close, setClose, addtocart }) {
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
                    <h3>฿ {curElm.Price}</h3>
                    <button onClick={() => addtocart(Homeproduct[0])}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="productbox"></div>
          </div>
        </div>
      ) : null}

      {/* top_banner*/}
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>Are you hungry today?</h2>

            <Link to="product" className="link">
              Eat Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src={Hungry} alt="hungry" />
          </div>
        </div>
      </div>

      {/* usestate */}
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {Homeproduct.map((curElm) => {
            return (
              <div className="box" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title} />
                  <div className="icon">
                    <li onClick={() => addtocart(curElm)}>
                      <AiOutlineShoppingCart />
                    </li>
                    <li onClick={() => view(curElm)}>
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
                  <h4>฿ {curElm.Price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* banner */}
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LOL we hungry very much</h4>
            <h3>Do you need to eat all my shop?</h3>
            <p>Pay 1,000,000 ฿</p>
            <Link to="/product" className="link">
              Eat Now <BsArrowRight />
            </Link>
          </div>

          <div className="img_box">
            <img src={Hungry} alt="Hungry" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
