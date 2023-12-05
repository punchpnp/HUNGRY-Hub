import React from "react";
import { FaTruck } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import "./Nav.css";
import ShopLogo from "./assets/Shop logo.png";

function Nav() {
  return (
    <>
      <div className="free">
        <div className="icon">
          <FaTruck />
        </div>
        <p>FREE Shipping when shopping up to $1000</p>
      </div>

      <div className="main_header">
        <div className="container">
          <div className="logo">
            <img className="w-24" src={ShopLogo} alt="logo" />
          </div>

          <div className="search_box">
            <input
              type="text"
              value=""
              placeholder="Search Your Product..."
              autoComplete="off"
            />
            <button>Search</button>
          </div>

          <div className="icon">
            <div className="account">
              <div className="user_icon">
                <AiOutlineUser />
              </div>
              <p>Hello, user</p>
            </div>

            <div className="second_icon">
              <p>
                <AiOutlineHeart />
              </p>
              <p>
                <BsBagCheck />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
