import "./category-container.styles.scss";
import React from "react";

const CategoryContainer = ({ category: { title, imageUrl } }) => {
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </div>
    </div>
  );
};

export default CategoryContainer;
