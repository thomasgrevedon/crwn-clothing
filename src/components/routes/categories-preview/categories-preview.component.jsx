import { Fragment } from "react";
import { useSelector } from "react-redux";
import { categoriesIsLoadingSelector, getCategoriesMap } from "../../../store/categories/categories.selectors";
import CategoryPreview from "../../category-preview/category-preview.component";
import Spinner from "../../spinner/spinner.component";

const CategoriesPreview = () => {
  const categories = useSelector(getCategoriesMap);
  const isCategoryLoading = useSelector(categoriesIsLoadingSelector);

  return (
    <>
      {Object.keys(categories).map((title) => {
        return <Fragment key={title}>{isCategoryLoading ? <Spinner></Spinner> : <CategoryPreview title={title} items={categories[title]}></CategoryPreview>}</Fragment>;
      })}
    </>
  );
};

export default CategoriesPreview;
