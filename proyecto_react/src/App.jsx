
import Navbar from "./components/Navbar/Navbar"
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer"
import CartWidget from "./components/CartWidget/CartWidget"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from "./components/Inicio/Inicio"

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


import "./index.css"





function App() {
 

  return (
    <BrowserRouter>
    
      <Navbar>
        <CartWidget/>
      </Navbar>

      <Routes>
        <Route  path="/" element= {<ItemsListContainer texto={"Bienvenido a la web con más SWAG del condado"}/>}/>
        <Route  path="/category/:idCategory" element= {<ItemsListContainer texto={"Bienvenido a la web con más SWAG del condado"}/>}/>  
        <Route path="/detail/:idProduct" element= {<ItemDetailContainer/>}>/</Route>
        <Route  path="*" element={"Error ruta no encontrada"}/> 
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
