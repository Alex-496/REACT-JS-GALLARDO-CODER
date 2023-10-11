import React from 'react';
import './styles.css';
import { BsCart4 } from 'react-icons/bs';
import { useCart } from '../context/CartContext';

function CartWidget() {
  const { getCountInCart } = useCart(); 

  const cartCount = getCountInCart();

  return (
    <span className="cart-widget">
      <BsCart4 className="cart-icon" />
      <span className="cart-notification">{cartCount}</span>
    </span>
  );
};

export default CartWidget;
