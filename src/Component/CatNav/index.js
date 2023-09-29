import React, { useEffect } from "react";
import "./_cat-nav.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/Category/action";

// import { getCategories } from "../../Redux/Category/action";

const CatNav = () => {
  const categories = useSelector((state) => state.cr.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  console.log(categories);
  return (
    <>
      <div className="cat-nav-container container">
        <ul>
          {categories.map((category, key) => {
            if (category.parent_id === null) {
              return (
                <li key={key} className="cat-list-items">
                  <a href="#">{category.name}</a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default CatNav;
