import React from "react";
import "./_cat-nav.scss";
import { useSelector } from "react-redux";
import CategorySlice from "../../Redux/Category/CategorySlice";

const CatNav = () => {
  const categories = useSelector(CategorySlice.getInitialState);

  return (
    <>
      <div className="cat-nav-container container">
        <ul>
          {categories.map((category) => {
            return (
              <li className="cat-list-items">
                <a href="#">{category}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CatNav;
