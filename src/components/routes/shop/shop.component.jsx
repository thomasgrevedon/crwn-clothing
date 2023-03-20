import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products: SHOP_DATA } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {SHOP_DATA.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </div>
  );
};

export default Shop;
