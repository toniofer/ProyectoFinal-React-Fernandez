import { ItemCount } from "./ItemCount";
import { useEffect, useState, useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";

const ItemDetail = ({ product }) => {

  const { addItem } = useContext(ItemsContext);

  const onAdd = (count) => {
    Swal.fire("El producto se agregó al carrito");
    addItem({ ...product, quantity: count });
  };

  return (
    <div className="card-item-detail">
      <h1>{product.name}</h1>
      <div className="image-box-card">
        <img className="image-card" src={product.image} />
      </div>
      <div className="info-card">
        <h4>{product.description}</h4>
        <h3>U$S {product.price}</h3>
        <h4>Stock disponible: {product.stock}</h4>      

        <ItemCount stock={product.stock} onAdd={onAdd} />
      </div>
    </div>
  )
}
export default ItemDetail