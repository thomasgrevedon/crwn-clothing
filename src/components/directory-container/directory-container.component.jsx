import "./directory-container.styles.scss";
import React from "react";

const DirectoryContainer = ({ category: { title, imageUrl } }) => {
  return (
    <div className='directory-container'>
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className='directory-body-container'>
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </div>
    </div>
  );
};

export default DirectoryContainer;
