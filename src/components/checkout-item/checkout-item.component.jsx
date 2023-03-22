import { useContext } from "react";
import { CartToggleContext } from "../contexts/cart-toggle.context";
import "./checkout-item.styles.scss";
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
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={handleRemovingQuanity}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={handleaddingQuanity}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={handleDeleteItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
