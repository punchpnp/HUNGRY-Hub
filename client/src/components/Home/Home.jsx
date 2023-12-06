import React from "react";
import { Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { FaBahtSign } from "react-icons/fa6";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { BiHeadphone } from "react-icons/bi";
import { CiPercent } from "react-icons/ci";

import KhaiJiao from "/src/assets/Khai-jiao.jpg";
import Mama from "/src/assets/mama.jpg";

import "./Home.css";

function Home() {
  return (
    <>
      {/* top_banner สำหรับโฆษณา */}
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Note Book Collection 2023</h2>
            <Link to="product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src={KhaiJiao} alt="" />
          </div>
        </div>
      </div>

      {/* สินค้าต่างๆ */}
      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img src={Mama} alt="mama-pud" />
            </div>

            <div className="detail">
              <p>23 products</p>
            </div>
          </div>

          <div className="box">
            <div className="img_box">
              <img src={Mama} alt="mama-pud" />
            </div>

            <div className="detail">
              <p>23 products</p>
            </div>
          </div>

          <div className="box">
            <div className="img_box">
              <img src={Mama} alt="mama-pud" />
            </div>

            <div className="detail">
              <p>23 products</p>
            </div>
          </div>

          <div className="box">
            <div className="img_box">
              <img src={Mama} alt="mama-pud" />
            </div>

            <div className="detail">
              <p>23 products</p>
            </div>
          </div>

          <div className="box">
            <div className="img_box">
              <img src={Mama} alt="mama-pud" />
            </div>

            <div className="detail">
              <p>23 products</p>
            </div>
          </div>
        </div>
      </div>

      {/* สิทธิพิเศษ */}
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FaBahtSign />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Order above ฿50</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <HiOutlineReceiptPercent />
            </div>
            <div className="detail">
              <h3>Return & Refund</h3>
              <p>Money Back Gaurenty</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <BiHeadphone />
            </div>
            <div className="detail">
              <h3>Member Discout</h3>
              <p>On every Order</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <CiPercent />
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>Every Time call Support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
