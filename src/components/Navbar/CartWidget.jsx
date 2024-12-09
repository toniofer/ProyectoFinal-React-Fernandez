import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";



export const CartWidget = () => {
  const { items } = useContext(ItemsContext);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Link to="/checkout">
        <div className="carrito">
          <TiShoppingCart size="40px" color="white" />
          {totalItems > 0 && <span className="badge">{totalItems}</span>}
        </div>
      </Link>
    </>
  );
};

export default CartWidget