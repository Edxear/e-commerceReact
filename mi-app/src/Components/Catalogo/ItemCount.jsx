import React, { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    alert(`Agregado ${count} items al carrito`);
  };

  return (
    <div className="item-count">
      <div className="count-controls">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={addToCart} className="add-to-cart-btn">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;