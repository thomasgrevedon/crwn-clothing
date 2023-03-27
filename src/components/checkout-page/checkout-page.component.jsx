import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDropDown } from "../../store/cart/cart.actions";
import { cartItemsSelector, totalPriceSelector } from "../../store/cart/cart.selector";
import CheckoutItem from "../checkout-item/checkout-item.component";
import "./checkout-page.styles.jsx";
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout-page.styles.jsx";

const CheckoutPage = () => {
  const cartItems = useSelector(cartItemsSelector);
  const totalPrice = useSelector(totalPriceSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDropDown(false));
  }, [dispatch]);

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
