import React, { useEffect } from "react";
import "./_product-nav.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/Product/action";
import { addToCartAction } from "../../Redux/Cart/cartSlice";

const ProductNav = () => {
  const productData = useSelector((state) => state.productReducer.product);
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  console.log("cart", cart);
  const addToCart = (productData) => {
    console.log('productData',productData)
    dispatch(addToCartAction(productData));
  };
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {productData.map((product, key) => {
        return (
          <div
            key={product.id}
            className="mx-5 p-3 col-lg-3 col-md-6 product-card"
          >
            <div className="product-img-container">
              <img
                src={require("../../Assets/Images/" + product.product_img)}
                width={"100%"}
              />
            </div>
            <div className="mt-2 text-center">
              <h6 className="mb-1">
                <a href="#">{product.name}</a>
              </h6>
              <p className="mb-1">₹ {product.price}</p>
            </div>
            <div className="product-rating text-center mt-0">
              {(() => {
                let rating = product.rating;
                let starArr = [];
                for (let i = 0; i < rating; i++) {
                  starArr.push(<i key={i} className="fa fa-star" />);
                }
                return starArr;
              })()}
            </div>

            <div
              className="addtoCart-container py-2 px-3 mt-3"
              onClick={() => addToCart(product)}
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
