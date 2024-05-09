import React, { useState } from 'react';
import "./itemCount.css"

const ItemCount = ({ stock }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleSubtract = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='ItemCount'>
      <button onClick={handleSubtract}>-</button>
      <span>{quantity}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default ItemCount;