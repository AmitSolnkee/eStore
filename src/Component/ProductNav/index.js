import React from "react";
import "./_product-nav.scss";
import { useSelector } from "react-redux";
import productSlice from "../../Redux/Product/productSlice";

const ProductNav = () => {
  const productData = useSelector(productSlice.getInitialState);
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {productData.map((product, key) => {
        return (
          <div className="mx-5 p-3 col-lg-3 col-md-6 product-card">
            <div className="product-img-container">
              <img
                src={require("../../Assets/Images/" + product.img)}
                width={"100%"}
              />
            </div>
            <div className="mt-2 text-center">
              <h6 className="mb-1">
                <a href="#">{product.pName}</a>
              </h6>
              <p className="mb-1">₹ {product.pPrice}</p>
            </div>
            <div className="product-rating text-center mt-0">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductNav;
