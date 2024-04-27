import { useState, useEffect } from "react"
import ItemsListContainer from "../ItemsListContainer/ItemsListContainer"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"






function ItemDetailContainer({ productId }) {
  const [productUnico, setProductUnico] = useState(null)
  const { idDetail } = useParams()

  useEffect(() => {
    fetch("https://run.mocky.io/v3/ec8e8c2a-92bd-4a2b-9368-83cec493b119")
     .then(response => parseInt(response.json()) ) 
     .then(productos => {
        if (idDetail) {
          const idProductos = productos.find((producto) => producto.id === idDetail)
          setProductUnico(idProductos)
        } else {
          setProductUnico(productos) 
        }
      })
     .catch(error => console.error("Error", error))
  }, [idDetail])

  return (
    <>
      {productUnico && <ItemDetail product={productUnico} />}
    </>
  )
}

export default ItemDetailContainer
