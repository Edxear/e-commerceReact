// CartWidget.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = ({ cartItems }) => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={20} />
      {cartItems > 0 && (
        <span className="cart-count">{cartItems}</span>
      )}
    </div>
  );
};

export default CartWidget;