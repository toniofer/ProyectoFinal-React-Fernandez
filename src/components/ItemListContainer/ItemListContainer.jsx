import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"
import "./itemListContainer.css"
import { getFirestore, getDocs, collection, where, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  //const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();
  
  const validCategories = ["procesadores", "motherboards", "rams"];

  useEffect(() => {
    
    const refCollection = !idCategory ? query(collection(db, "products"), orderBy("code"))
      : query(collection(db, "products"), where("category", "==", idCategory), orderBy("price"));
    
    getDocs(refCollection)
      .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      //.finally(() => setLoading(false));
    }, [idCategory]);

  return (
    <div className="item-list-container">
      <ItemList products={products} />
    </div>
  );

};
export default ItemListContainer;
