import React from "react";
import CategoryItem from "../category-item/category-item.component";

import "./categories-menu.styles.scss";

const CategoriesMenu = (props) => {
  return (
    <div className="categories-container">
      {props.categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesMenu;
