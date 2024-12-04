import { TiShoppingCart } from "react-icons/ti";

function CartWidget() {
  return (
    <div className="carrito">
       
        <TiShoppingCart size="40px" color="white"/>
        <span className="badge">6</span>
    </div>
  )
}

export default CartWidget