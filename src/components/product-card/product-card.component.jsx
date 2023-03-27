import Button, { BUTTON_TYPES } from "../button/button.component";
import "./product-card.styles.jsx";
import { Footer, Name, Price, ProductCardContainer } from "./product-card.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../store/cart/cart.actions";
import { cartItemsSelector } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);

  const addProductToCart = () => {
    dispatch(addItems(cartItems, product));
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
