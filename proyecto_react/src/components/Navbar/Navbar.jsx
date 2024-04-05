
import "./navbar.css"
import logo from "../../assets/FUAREQ.png"
import CartWidget from "../CartWidget/CartWidget"



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
        <CartWidget/>
        
      </nav>
    </>
  )
}

export default Navbar
