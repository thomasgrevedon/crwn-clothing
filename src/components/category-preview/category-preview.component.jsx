import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.jsx";
import { CategoryPreviewContainer, Preview, Title } from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, items }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
          <span className='title'>{title}</span>
        </Title>
      </h2>
      <Preview>
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => {
            return <ProductCard key={item.id} product={item}></ProductCard>;
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
