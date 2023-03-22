import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import CategoryPreview from "../../category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categories).map((title) => {
        return (
          <Fragment key={title}>
            <CategoryPreview title={title} items={categories[title]}></CategoryPreview>
          </Fragment>
        );
      })}
    </>
  );
};

export default CategoriesPreview;
