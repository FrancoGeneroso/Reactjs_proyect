

import "./itemDetail.css"



function ItemDetail({item}) {
  return (
    <div className="item-detail">
      <h2 className="item-detail-title">{item.title}</h2>
      <img src={item.image} alt={item.title} className="item-detail-image" />
      <p className="item-detail-description">{item.description}</p>
      <p className="item-detail-price">Precio: ${item.price}</p>
      {/*<ItemCount stock={item.stock} initial={1} />*/}
      <button className="boton-comprar">COMPRAR</button>
    </div>
  )
}

export default ItemDetail
