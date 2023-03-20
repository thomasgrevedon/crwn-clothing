import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <Button buttontype='inverted'>Add to card</Button>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  );
};

export default ProductCard;
