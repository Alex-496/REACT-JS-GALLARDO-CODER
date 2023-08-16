import React from 'react';
import { BsCart4 } from 'react-icons/bs';

const CarritoWidget = () => {
  const cartItemCount = 0;

  return (
    <div className="cart-widget">
      <BsCart4 className="cart-icon" />
      <span className="cart-notification">{cartItemCount}</span>
    </div>
  );
};

export default CarritoWidget;
