import { useContext } from "react";
import { CartToggleContext } from "../contexts/cart-toggle.context";
import "./checkout-item.styles.jsx";
import { Arrow, CheckoutItemContainer, ImageContainer, Img, Name, Price, Quantity, RemoveButton, ValueField } from "./checkout-item.styles.jsx";
const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { removeOneQantity, addOneQantity, deleteItem } = useContext(CartToggleContext);

  const handleRemovingQuanity = () => {
    removeOneQantity(cartItem);
  };

  const handleaddingQuanity = () => {
    addOneQantity(cartItem);
  };

  const handleDeleteItem = () => {
    deleteItem(cartItem);
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
