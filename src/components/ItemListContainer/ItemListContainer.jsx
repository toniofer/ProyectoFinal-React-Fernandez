import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/getProducts";
import { useParams } from "react-router-dom"
import "./itemListContainer.css"

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();
  

  // Lista de categorías válidas 
  const validCategories = ["procesadores", "motherboards", "rams"];

  useEffect(() => {
    getProducts
      .then((respuesta) => {
        if (idCategory && validCategories.includes(idCategory)) {
          // Si la categoría existe, filtramos los productos por categoría
          const selectProducts = respuesta.filter(
            (producto) => producto.category === idCategory
          );
          
          setProducts(selectProducts); // Mostramos productos de la categoría o vacíos
        } else {
          // Si no existe la categoría, mostramos todos los productos
          
          setProducts(respuesta); // Mostrar todos los productos si la categoría no existe
        }
      })
      .catch((error) => console.log(error));
  }, [idCategory]);

    // Verificamos si la categoría es válida y si los productos están vacíos
    const noProductsInCategory = idCategory && products.length === 0;
  const categoryDoesNotExist = idCategory && !validCategories.includes(idCategory);

  return (
    <div className="item-list-container">
      <h2 className="title-items">{saludo}</h2>

      {categoryDoesNotExist ? (
        // Si la categoría no existe, mostramos todos los productos
        <ItemList products={products} />
      ) : noProductsInCategory ? (
        // Si la categoría existe pero no tiene productos, mostramos el mensaje
        <h3>No hay productos en esta categoría.</h3>
      ) : (
        // Si la categoría tiene productos, los mostramos
        <ItemList products={products} />
      )}
    </div>
  );
};
export default ItemListContainer;
