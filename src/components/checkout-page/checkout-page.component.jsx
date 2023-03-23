import { useContext, useEffect } from "react";
import Button from "../button/button.component";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { CartToggleContext } from "../contexts/cart-toggle.context";
import "./checkout-page.styles.jsx";
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout-page.styles.jsx";

const CheckoutPage = () => {
  const { setShowDropDown, cartItems, removeOneQantity, totalPrice } = useContext(CartToggleContext);

  useEffect(() => {
    setShowDropDown(false);
  }, []);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>TOTAL: ${totalPrice}</Total>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
