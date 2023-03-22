import { Fragment, useContext } from "react";
import CategoryPreview from "../../category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);
  console.log(categories);
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

export default Shop;
