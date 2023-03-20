import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartToggleContext } from "../contexts/cart-toggle.context";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartToggleContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} product={cartItem} />;
        })}
      </div>
      <Button>Add to Cart </Button>
    </div>
  );
};

export default CartDropdown;
