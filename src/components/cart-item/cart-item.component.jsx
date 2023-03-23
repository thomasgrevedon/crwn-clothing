import "./cart-item.styles.jsx";
import { CartImg, CartItemContainer, ItemDetails, Name } from "./cart-item.styles.jsx";

const CartItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  return (
    <CartItemContainer>
      <CartImg src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {price} x {quantity}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
