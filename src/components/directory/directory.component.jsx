import "./directory.styles.scss";
import React from "react";
import CategoryContainer from "../directory-container/directory-container.component";

const Directory = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => {
        return <CategoryContainer key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
