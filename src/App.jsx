import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Page404 from './components/page404/Page404';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Listado de artículos de AF Systems, tu tienda de hardware informático" />} />
        <Route path="/category/:idCategory" element={<ItemListContainer saludo="Nuestros productos" />} />        
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        <Route path="*" element={<Page404 />} />
      </Routes> 
      
    </BrowserRouter>
  )
}

export default App
