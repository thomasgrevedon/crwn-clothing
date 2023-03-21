import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartToggleContext } from "../contexts/cart-toggle.context";
import "./cart-dropdown.styles.scss";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartToggleContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} product={cartItem} />;
          })
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Link to={"/checkout"}>
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
