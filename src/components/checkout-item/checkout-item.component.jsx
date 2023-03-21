import { useContext } from "react";
import Button from "../button/button.component";
import { CartToggleContext } from "../contexts/cart-toggle.context";
import "./checkout-item.styles.scss";
const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { removeOneQantity, addOneQantity, deleteItem, totalPrice } = useContext(CartToggleContext);

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
    <div>
      <div>
        <img src={imageUrl} alt={name} />
        <span>{name} </span>
        <Button onClick={handleRemovingQuanity}>-</Button>
        <span>{quantity}</span>
        <Button onClick={handleaddingQuanity}>+</Button>
        <span>{price}</span>
        <Button onClick={handleDeleteItem}>X</Button>
      </div>
      <div>{totalPrice}</div>
    </div>
  );
};

export default CheckoutItem;
