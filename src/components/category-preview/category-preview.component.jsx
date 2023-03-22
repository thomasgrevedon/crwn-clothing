import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, items }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={title}>
          <span className='title'>{title}</span>
        </Link>
      </h2>
      <div className='preview'>
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => {
            return <ProductCard key={item.id} product={item}></ProductCard>;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
