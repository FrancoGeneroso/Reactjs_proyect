
import "./navbar.css"
import logo from "../../assets/FUAREQ.png"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"




function Navbar({children}) {
  return (
    <>
      <nav className='navbar'>
        <div> 
          <Link to="/" ><img className='logo' src={logo} alt="logo" href="/inicio"/></Link>
        </div>
        <ul className='navbar-links'>
          <li className='navbar-items'><a className='ancla-items' href="/inicio">INICIO</a></li>
          <li className='navbar-items'><a className='ancla-items' href="/productos">PRODUCTOS</a></li>
          <li className='navbar-items'><a className='ancla-items' href="/contacto">CONTACTO</a></li>
          <li className='navbar-items'><a className='ancla-items' href="/ayuda">AYUDA</a></li>
        </ul>
        <div className="carrito-position">
          {children}
        </div>
        
      </nav>
    </>
  )
}

export default Navbar
