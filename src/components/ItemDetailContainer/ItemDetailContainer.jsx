import { useState, useEffect, useContext } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import "./itemDetailContainer.css"
import { doc, getDoc } from "firebase/firestore";
import { ItemCount } from "./ItemCount";
import { ItemsContext } from "../contexts/ItemsContext";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { idProduct } = useParams()
  const { addItem } = useContext(ItemsContext);
  //const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const value = useContext(ItemsContext);

  useEffect(()=>{
    
    const refDoc = doc(db, "products", idProduct);

    getDoc(refDoc)
    .then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    })
    .finally(() => setLoading(false));
  }, [idProduct]);


  if (loading) {
    return <h5>Cargando...</h5>;
  }

  if (!product) {
    return <h5>Artículo no encontrado</h5>;
  }

  console.log(product);

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />
    </div>
  )
}
export default ItemDetailContainer