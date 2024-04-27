
import "./navbar.css"
import logo from "../../assets/FUAREQ.png"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"




function Navbar({children}) {
  return (
    <>
      <nav className='navbar'>
        <div> 
          <Link to="/" ><img className='logo' src={logo} alt="logo"/></Link>
        </div>
        <ul className='navbar-links'>

          <Link to="/category/pantalon" className="ancla-items navbar-items">PANTALON</Link>
          <Link to="/category/remera" className="ancla-items navbar-items">REMERAS</Link>
          <Link to="/category/gorro" className="ancla-items navbar-items">GORROS</Link>
          <Link to="/category/zapatos" className="ancla-items navbar-items">ZAPATOS</Link>
          
        
        </ul>
        <div className="carrito-position">
          {children}
        </div>
        
      </nav>
    </>
  )
}

export default Navbar
