import React from "react";

import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

import "./cart.css";

function Cart({ cart, setCart }) {
  return (
    <>
      <div className="cartcontainer">
        {cart.length === 0 && (
          <div className="emptycart">
            <h2 className="empty">Cart is Empty</h2>
            <Link to="/product" className="emptycartbtn">
              Shop Now
            </Link>
          </div>
        )}

        <div className="contant">
          {cart.map((curElm) => {
            return (
              <div className="cart_item" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title} />
                </div>
                <div className="detail">
                  <h4>{curElm.cat}</h4>
                  <h3>{curElm.Title}</h3>
                  <p>{curElm.Price}</p>
                  <button>
                    <IoIosCloseCircle />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cart;
