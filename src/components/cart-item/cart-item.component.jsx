import "./cart-item.styles.scss";

const CartItem = ({ product }) => {
  const { name, price, quantity } = product;
  return (
    <div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{quantity}</div>
    </div>
  );
};

export default CartItem;
