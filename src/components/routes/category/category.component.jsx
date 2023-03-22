import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../product-card/product-card.component";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
    console.log(categories[category]);
  }, [categories, category]);

  return (
    <div className='category-container-specific'>
      {products &&
        products.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
    </div>
  );
};

export default Category;
