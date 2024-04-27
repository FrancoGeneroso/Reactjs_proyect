import { useState,useEffect, } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


import "./item.css"


function ItemsListContainer({texto}) 
 
 {
  const [products,setProducts]=useState([])
  const {idCategory}= useParams()
  
  useEffect(() => {
    fetch("https://run.mocky.io/v3/ec8e8c2a-92bd-4a2b-9368-83cec493b119")
     .then(response => response.json()) // <--- Espera a que se resuelva la promesa
     .then(productos => {
        if (idCategory) {
          const nuevoProductos = productos.filter((producto) => producto.category === idCategory)
          setProducts(nuevoProductos)
        } else {
          setProducts(productos) // <--- Mostrar todos los productos si no hay categoría seleccionada
        }
      })
     .catch(error => console.error("Error", error))
  }, [idCategory])
      
  
  
    return (
      <>
      <h1 className="text-4xl text-center bienvenido mt-3" >{texto}</h1>
      <ItemList products={products}/>      
       
      </>
    )
  }

  export default ItemsListContainer
  

