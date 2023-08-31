import React from 'react';
import './CartWidget.css';
import { BsCart4 } from 'react-icons/bs';

const CartWidget = () => {
  const cartItemCount = 0;

  return (
    <div className="cart-widget">
      <BsCart4 className="cart-icon" />
      <span className="cart-notification">{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;
