import React from "react";
import "./_cart_.scss";

const Cart = () => {
  return (
    <div className="conatiner ">
      <h1>Your Cart item {"4 items"}</h1>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-6">
            <h6>Items</h6>
          </div>
          <div className="col-2">
            <h6>Price</h6>
          </div>
          <div className="col-2">
            <h6>Quantity</h6>
          </div>
          <div className="col-2">
            <h6>Total</h6>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6 d-flex align-items-center">
            <img
              src={require("../../Assets/Images/shop-1.jpg")}
              width={"20%"}
            />
            <p className="p-4 ms-4 fs-5 fw-bold">Iphone 15 pro</p>
          </div>
          <div className="col-2 d-flex align-items-center">
            <p className="">4599/-</p>
          </div>
          <div className="col-2 d-flex align-items-center">
            <button>-</button>
            <input className="" style={{ width: "20%" }} />
            <button>+</button>
          </div>
          <div className="col-2 d-flex align-items-center">
            <p>5999/-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
