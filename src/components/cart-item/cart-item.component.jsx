import "./cart-item.styles.scss";

const CartItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span>
          {price} x {quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
