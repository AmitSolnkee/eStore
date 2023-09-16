import React from "react";
import "./_side-nav.scss";

const SideNav = () => {
  return (
    <div className="side-nav-container">
      <div className="side-nav-category-title">
        <h4>Category</h4>
      </div>

      <div className="accordion">
        <div className="accordion-item individual-accordion-item">
          <div className="accordion-header">
            <button
              className="accordion-button"
              data-bs-target="#accordion-header-one"
              data-bs-toggle="collapse"
            >
              <div className="accordion-title">
                <a href="#">Men</a>
              </div>
            </button>
          </div>
          <div
            className="accordion-collapse collapse show"
            id="accordion-header-one"
          >
            <div className="accordion-body">
              <ul>
                <li className="sub-items">
                  <a href="#">Top wears</a>
                </li>
                <li className="sub-items">
                  <a href="#">Bottom wears</a>
                </li>
                <li className="sub-items">
                  <a href="#">Shorts</a>
                </li>
                <li className="sub-items">
                  <a href="#">Party wears</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
