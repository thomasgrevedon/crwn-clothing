import { useDispatch, useSelector } from "react-redux";
import { addOneQantity, deleteItem, removeOneQantity } from "../../store/cart/cart.actions";
import { cartItemsSelector } from "../../store/cart/cart.selector";
import "./checkout-item.styles.jsx";
import { Arrow, CheckoutItemContainer, ImageContainer, Img, Name, Price, Quantity, RemoveButton, ValueField } from "./checkout-item.styles.jsx";
const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);

  const handleRemovingQuanity = () => {
    dispatch(removeOneQantity(cartItems, cartItem));
  };

  const handleaddingQuanity = () => {
    dispatch(addOneQantity(cartItems, cartItem));
  };

  const handleDeleteItem = () => {
    dispatch(deleteItem(cartItems, cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name} </Name>
      <Quantity>
        <Arrow onClick={handleRemovingQuanity}>&#10094;</Arrow>
        <ValueField>{quantity}</ValueField>
        <Arrow onClick={handleaddingQuanity}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={handleDeleteItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
