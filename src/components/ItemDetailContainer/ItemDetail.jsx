const ItemDetail = ({ product }) => {
  return (
    <div className="card-item-detail">
      <h1>{product.name}</h1>
      <div className="image-box-card">
        <img className="image-card" src={product.image} />
      </div>
      <div className="info-card">
        <h4>{product.description}</h4>
        <h3>U$S {product.price}</h3>
      </div>
    </div>
  )
}
export default ItemDetail