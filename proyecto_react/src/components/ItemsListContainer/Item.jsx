

import { Link } from "react-router-dom"
import "./item.css"



function Item({product, id,}) {
  return (
    <Link to={`/detail/${id}`}  className="item-detail">
      <h2 className="item-detail-title">{product.title}</h2>
      <img src={product.image} alt={product.title} className="item-detail-image" />
      <p className="item-detail-description">{product.description}</p>
      <p className="item-detail-description">Ver detalle</p>
      <p className="item-detail-price">Precio: ${product.price}</p>
      {/*<ItemCount stock={item.stock} initial={1} />*/}
      <button className="boton-comprar">AGREGAR AL CARRITO</button>
    </Link>
  )
}

export default Item
