import { useContext, useState } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import { ImBin } from "react-icons/im";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "./checkout.css";


export const Checkout = () => {

    const { items, reset, removeItems } = useContext(ItemsContext);

    const total = items.reduce((accum, prod) => accum + (prod.price * prod.quantity || 0), 0);
   

    if (!items.length)
        return <h2>El carrito está vacío</h2>;

    return (
        <div className="div-checkout">
            <table className="tbl-checkout">
                <tr className="line-btn">
                    <td colSpan="6"><button type="button" className="btn-cart" onClick={reset}>
                        Vaciar carrito</button>
                    </td>
                </tr>
                <tr>
                    <th>Código</th>                    
                    <th>Nombre producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
                {items?.map((it) => (
                    <tr>
                        <td className="oculta">{it.id}</td>
                        <td>{it.code}</td>
                        <td>{it.name}</td>
                        <td>{it.price}</td>
                        <td>{it.quantity}</td>
                        <td>{it.price * it.quantity}</td>
                        <td>
                            <button type="button" className="btn-delete" onClick={() => removeItems(it.id)} >
                                <ImBin size="20px" />
                            </button>
                        </td>
                    </tr>
                ))}
                
                <tr className="line-total" >
                    <td className="" colSpan="4">
                        TOTAL: 
                    </td>
                    <td>
                        {total}
                    </td>
                </tr>
            </table>
        </div>
    )
};

export default Checkout;