import { useContext, useEffect } from "react";
import Button from "../button/button.component";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { CartToggleContext } from "../contexts/cart-toggle.context";
import "./checkout-page.component.scss";

const CheckoutPage = () => {
  const { setShowDropDown, cartItems, removeOneQantity, totalPrice } = useContext(CartToggleContext);

  useEffect(() => {
    setShowDropDown(false);
  }, []);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className='total'>TOTAL: ${totalPrice}</div>
    </div>
  );
};

export default CheckoutPage;
