import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { categoriesIsLoadingSelector, getCategoriesMap } from "../../../store/categories/categories.selectors";
import ProductCard from "../../product-card/product-card.component";
import Spinner from "../../spinner/spinner.component";
import "./category.styles.jsx";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(getCategoriesMap);
  const isCategoryLoading = useSelector(categoriesIsLoadingSelector);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [categories, category]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isCategoryLoading ? (
        <Spinner></Spinner>
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product}></ProductCard>;
            })}
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;
