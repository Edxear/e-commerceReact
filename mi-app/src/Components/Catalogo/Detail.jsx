import React from 'react';
import ItemCount from './ItemCount';

const Detail = ({ product }) => {
  return (
    <div className="item-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      <ItemCount />
    </div>
  );
};

export default Detail;