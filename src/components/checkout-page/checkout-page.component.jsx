import { useContext, useEffect } from "react";
import Button from "../button/button.component";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { CartToggleContext } from "../contexts/cart-toggle.context";
import "./checkout-page.component.scss";

const CheckoutPage = () => {
  const { setShowDropDown, cartItems, removeOneQantity } = useContext(CartToggleContext);

  useEffect(() => {
    setShowDropDown(false);
  }, []);

  return (
    <div>
      {cartItems.map((cartItem) => {
        return (
          <div key={cartItem.id}>
            <CheckoutItem cartItem={cartItem} />
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutPage;
