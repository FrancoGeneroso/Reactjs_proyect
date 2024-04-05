
import "../CartWidget/cartWidget.css"
import { FaCartShopping } from "react-icons/fa6";

function CartWidget() {
  return (
    <>
      <div className="carrito">
        <FaCartShopping size={"40px"} color='white'/>
        <span className='badge'>5</span>
    </div>
    </>
  )
}

export default CartWidget
