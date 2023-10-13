import React, { useEffect } from "react";
import "./_product-nav.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/Product/action";
// import { addToCartAction } from "../../Redux/Cart/cartSlice";

const ProductNav = () => {
  const productData = useSelector((state) => state.productReducer.product);
  console.log("productData", productData);
  
  const dispatch = useDispatch();
  // const addToCart = (productData) => {
  //   dispatch(addToCartAction(productData));
  // };
  useEffect(() => {
    dispatch(getProduct());
  });

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {productData.map((product) => {
        return (
          <div
            key={product.product_id}
            className="mx-5 p-3 col-lg-3 col-md-6 product-card"
          >
            <div className="product-img-container">
              <img
                src={require("../../Assets/Images/" + product.img)}
                width={"100%"}
              />
            </div>
            <div className="mt-2 text-center">
              <h6 className="mb-1">
                <a href="#">{product.productName}</a>
              </h6>
              <p className="mb-1">₹ {product.price}</p>
            </div>
            <div className="product-rating text-center mt-0">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>

            <div
              className="addtoCart-container py-2 px-3 mt-3"
              // onClick={() => addToCart(product)}
            >
              <i className="me-4 fa fa-shopping-cart" />
              <p className="mb-0"> Add to cart</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductNav;
