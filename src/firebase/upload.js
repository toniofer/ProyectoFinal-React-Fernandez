import { collection, addDoc } from "firebase/firestore";
import { db } from "./config.js";
import { products } from "../data/getProducts.js";

const uploadProductos = async () => {
    const productosRef = collection(db, "products");

    for (const product of products) {
        try {
            const docRef = await addDoc(productosRef, product);            
        } catch (error) {
            console.error("Error al subir producto: ", error);
        }
    }
};

uploadProductos();