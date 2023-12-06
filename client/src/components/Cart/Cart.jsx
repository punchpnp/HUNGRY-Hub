import React from "react";

import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

import "./cart.css";

function Cart({ cart, setCart }) {
  // increase qty เพิ่มจำนวนในตะกร้า
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty + 1 }
          : curElm;
      })
    );
  };

  // decrease qty ลบจำนวนในตะกร้า
  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty - 1 }
          : curElm;
      })
    );
  };

  // remove cart
  const removeproduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  };

  // total price
  const Totalprice = cart.reduce(
    (price, item) => price + item.qty * item.Price,
    0
  );
  return (
    <>
      <div className="cartcontainer">
        <div className="center">
          {cart.length === 0 && (
            <div className="emptycart">
              <h2 className="empty">Cart is Empty</h2>
              <Link to="/product" className="emptycartbtn">
                Shop Now
              </Link>
            </div>
          )}
        </div>

        <div className="contant">
          {cart.map((curElm) => {
            return (
              <div className="cart_item" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title} />
                </div>
                <div className="detail">
                  <div className="info">
                    <h4>{curElm.cat}</h4>
                    <h3>{curElm.Title}</h3>
                    <p>Price: ฿ {curElm.Price}</p>
                    <div className="qty">
                      <button className="decqty" onClick={() => decqty(curElm)}>
                        -
                      </button>
                      <input type="text" value={curElm.qty} />
                      <button className="incqty" onClick={() => incqty(curElm)}>
                        +
                      </button>
                    </div>
                    <h4>sub total: ฿ {curElm.Price * curElm.qty}</h4>
                  </div>

                  <div className="close">
                    <button onClick={() => removeproduct(curElm)}>
                      <IoIosCloseCircle />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {cart.length > 0 && (
          <>
            <h2 className="totalprice">total: ฿ {Totalprice}</h2>
            <button className="checkout">Checkout</button>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
