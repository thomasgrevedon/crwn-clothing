import Button, { BUTTON_TYPES } from "../button/button.component";
import "./product-card.styles.jsx";
import { useContext } from "react";
import { CartToggleContext } from "../contexts/cart-toggle.context";
import { Footer, Name, Price, ProductCardContainer } from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { cartItems, addItemToCart } = useContext(CartToggleContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Button buttontype={BUTTON_TYPES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
    </ProductCardContainer>
  );
};

export default ProductCard;
