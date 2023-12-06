import React from "react";
import ShopLogo from "/src/assets/Shop logo.png";

import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          {/* about */}
          <div className="about">
            <div className="logo">
              <img className="w-24" src={ShopLogo} alt="shop logo" />
            </div>

            <div className="detail">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                necessitatibus? Sed similique accusamus non dolorem tempora?
                Nostrum non aspernatur voluptatum autem ratione doloribus,
                repellendus, laborum aperiam ad tenetur perspiciatis! Quod.
              </p>
              <div className="icon">
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaLine />
                </li>
                <li>
                  <FaGithub />
                </li>
                <li>
                  <FaLinkedin />
                </li>
              </div>
            </div>
          </div>

          {/* accout */}
          <div className="accout">
            <h3>My Account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>Shipping</li>
              <li>return</li>
            </ul>
          </div>

          {/* page */}
          <div className="page">
            <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terma & Condition</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
