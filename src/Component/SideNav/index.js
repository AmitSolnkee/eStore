import React from "react";
import "./_side-nav.scss";
import { useSelector } from "react-redux";
import accordionSlice from "../../Redux/Accordion/accordionSlice";

const SideNav = () => {
  const accordionData = useSelector(accordionSlice.getInitialState);
  return (
    <div className="side-nav-container">
      <div className="side-nav-category-title">
        <h4>Category</h4>
      </div>

      <div className="accordion">
        {accordionData.map((categoryData) => {
          return (
            <div className="accordion-item individual-accordion-item">
              <div className="accordion-header">
                <button
                  className="accordion-button"
                  data-bs-target="#accordion-header-one"
                  data-bs-toggle="collapse"
                >
                  <div className="accordion-title">
                    <a href="#">{categoryData.mainCategory}</a>
                  </div>
                </button>
              </div>
              <div
                className="accordion-collapse collapse show"
                id="accordion-header-one"
              >
                <div className="accordion-body">
                  <ul>
                    {categoryData.subCategory.map((items) => {
                      return (
                        <li className="sub-items">
                          <a href="#">{items}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
