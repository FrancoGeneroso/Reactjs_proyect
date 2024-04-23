
import Navbar from "./components/Navbar/Navbar"
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer"
import CartWidget from "./components/CartWidget/CartWidget"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from "./components/Inicio/Inicio"

import "./index.css"





function App() {
 

  return (
    <BrowserRouter>
    
      <Navbar>
        <CartWidget/>
      </Navbar>

      <Routes>
        <Route  path="/inicio" element= {<Inicio/>} />
        <Route  path="/productos" element= {<ItemsListContainer texto={"Bienvenido a la web con más SWAG del condado"}/>}/> 
        <Route  path="/contacto" element= {<h2>Contacto</h2>}/>
        <Route  path="/ayuda" element= {<h2>Ayuda</h2>}/>
        <Route  path="*" element={"Error ruta no encontrada"}/> 
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
