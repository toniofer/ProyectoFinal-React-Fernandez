import { useContext, useState } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import { ImBin } from "react-icons/im";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./checkout.css";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
};



const mostrarMensajeConBoton = (texto, funcion) => {
    Swal.fire({
        title: "Compra finalizada exitosamente",
        text: texto,
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#7e0303",
        confirmButtonText: "Aceptar"
    }).then((result) => {
        if (result.isConfirmed) {
            funcion();
        }
    });
}

export const Checkout = () => {

    const { items, reset, removeItems } = useContext(ItemsContext);
    const total = items.reduce((accum, prod) => accum + (prod.price * prod.quantity || 0), 0);
    const [buyer, setBuyer] = useState(initialValues);
    const [orderSuccess, setOrderSuccess] = useState(null);
    const navigate = useNavigate();

    const finalizarCompra = () => {
        reset();
        setBuyer(initialValues);
        navigate("/");
    };


    const handleChange = (e) => {
        setBuyer((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const updateStock = async (itemId, quantity) => {
        const docRef = doc(db, "items", itemId);
        
        try {
            // Obtener el documento actual
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                const currentStock = docSnap.data().stock; // Obtener el stock actual
                const newStock = currentStock - quantity;
    
                // Actualizar el stock
                await updateDoc(docRef, { stock: newStock });
                console.log(`Stock actualizado para el item ${itemId}`);
            } else {
                console.log(`El documento con ID ${itemId} no existe.`);
            }
        } catch (error) {
            console.error("Error al actualizar el stock:", error);
        }
    };

    const updateStocks = async () => {
        try {
            await Promise.all(
                items.map((it) => updateStock(it.id, it.quantity))
            );
            console.log("Todos los stocks actualizados correctamente");
        } catch (error) {
            console.error("Error al actualizar stocks:", error);
        }
    };
    


    const itemsSinStock = items.map(({ stock, ...itemSinStock }) => itemSinStock);

    /////////////////////////////////////////////////
    const handleSubmit = async (e) => {
        
        e.preventDefault();

        const order = {
            buyer: buyer,
            items: itemsSinStock,
            total: total,
        };

        const orderCollection = collection(db, "orders");

        try {
            const docRef = await addDoc(orderCollection, order);
            if (docRef.id) {
                setOrderSuccess(`Su compra ha sido procesada correctamente`);
                updateStocks();
                const mensaje = `ID de la orden: ${docRef.id}`;
                mostrarMensajeConBoton(mensaje, finalizarCompra);

            }
        } catch (error) {
            console.error("Error al procesar la compra: ", error);
        }

    };

    if (!items.length && !orderSuccess)
        return (
            <div className="div-cart-empty">
                <h2>El carrito está vacío</h2>
                <Link to="/" className="btn-regresar">Regresar</Link>            
            </div>
        );

    return (
        <div className="div-checkout">
            <table className="tbl-checkout">
                <thead>
                    <tr className="line-btn">
                        <td colSpan="6"><button type="button" className="btn-cart" onClick={reset}>
                            VACIAR CARRITO</button>
                        </td>
                    </tr>
                    <tr>
                        <th>Código</th>
                        <th>Nombre producto</th>
                        <th>Precio (U$S)</th>
                        <th>Cantidad</th>
                        <th>Subtotal (U$S)</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((it) => (
                        <tr key={it.id}>
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
                            TOTAL (U$S):
                        </td>
                        <td>
                            {total}
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="form-container">
                <h2>Datos comprador</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={buyer.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            value={buyer.apellido}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={buyer.telefono}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={buyer.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        FINALIZAR COMPRA
                    </button>
                </form>
            </div>
        </div>

    )
};

export default Checkout;