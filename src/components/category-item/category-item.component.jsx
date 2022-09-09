import React from "react";
import "./category-item.styles.scss";

const CategoryItem = (props) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${props.category.imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{props.category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
