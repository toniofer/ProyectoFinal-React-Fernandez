import { Link } from "react-router-dom"
import "./page404.css"

const Page404 = () => {

    console.log("Página 404 cargada"); // Agregado para depurar
    return (
        <div className="p404">
            <h1>Ups!</h1>
            <h3>La página que buscas no existe.</h3>
            <Link to={"/"}>Volver</Link>
        </div>
    )

}
export default Page404