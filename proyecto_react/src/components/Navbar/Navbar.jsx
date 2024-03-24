
import "./navbar.css"
import logo from "../../assets/FUAREQ.png"
import { FaCartShopping } from "react-icons/fa6";


function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div> <img className='logo' src={logo} alt="logo" href="#" /> </div>
        <ul className='navbar-links'>
          <li className='navbar-items'><a className='ancla-items' href="#">INICIO</a></li>
          <li className='navbar-items'><a className='ancla-items' href="#">PRODUCTOS</a></li>
          <li className='navbar-items'><a className='ancla-items' href="#">CONTACTO</a></li>
          <li className='navbar-items'><a className='ancla-items' href="#">AYUDA</a></li>
        </ul>
        <div className="carrito">
        <FaCartShopping size={"40px"} color='white'/>
        <span className='badge'>5</span>
        </div>
        
      </nav>
    </>
  )
}

export default Navbar
