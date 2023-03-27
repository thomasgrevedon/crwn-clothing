import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getCategoriesMap } from "../../../store/categories/categories.selectors";
import CategoryPreview from "../../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categories = useSelector(getCategoriesMap);

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
