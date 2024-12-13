import React from 'react';
import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
    setCount(1);
  };

  return (
    <div className="item-count">
      <button className="btn-count" onClick={handleDecrease}> - </button>
      <span className="count">{count}</span>
      <button className="btn-count" onClick={handleIncrease}> + </button>
      <div>
        <button className="btn-add-cart" onClick={handleAdd}>Agregar al carrito</button>
      </div>
    </div>
  );
};

