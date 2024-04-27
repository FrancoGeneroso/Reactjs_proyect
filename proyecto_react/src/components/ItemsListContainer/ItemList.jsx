
import Item from "./Item"

import './item.css'

function ItemList({products}) {
  return (
    <div className="itemContainer">
      {products && products.map((product) => (<Item key={product.id} product={product} />
          ))}
    </div>
  )
}

export default ItemList
