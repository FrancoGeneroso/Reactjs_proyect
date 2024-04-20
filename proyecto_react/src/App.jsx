
import Navbar from "./components/Navbar/Navbar"
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer"
import CartWidget from "./components/CartWidget/CartWidget"
import "./index.css"



function App() {
 

  return (
    <>
    
      <Navbar>
        <CartWidget/>
      </Navbar>
      <ItemsListContainer texto={"Bienvenido a la web con más SWAG del condado"}/>
      
    </>
  )
}

export default App
