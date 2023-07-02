import React from "react";
import "./category.css";

const Category = ({ category, callback }) => {
  return (
    <button className="category" onClick={callback}>
      {category}
    </button>
  );
};

export default Category;
