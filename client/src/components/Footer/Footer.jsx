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
                We are a dedicated team of developers passionate about creating
                innovative and high-quality software solutions. Our goal is to
                deliver exceptional user experiences through our projects.
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
