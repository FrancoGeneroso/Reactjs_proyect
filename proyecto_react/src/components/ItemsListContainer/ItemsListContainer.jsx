import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"



import "./bienvenido.css"


function ItemsListContainer({texto}) 
 
 {
  const [productos,setProductos]=useState([])
  
  useEffect(() => {
    fetch("https://run.mocky.io/v3/ec8e8c2a-92bd-4a2b-9368-83cec493b119")
      .then(response=>{
        if(!response.ok){
          throw new Error("No puedo traer el producto")
        }
        return response.json()
      })
      .then(data=>{setProductos(data)})
      .catch(error=>{"Error",error})
  ,[]}
      
  )
  
    return (
      <>
      <h1 className="text-4xl text-center bienvenido mt-3" >{texto}</h1>
      <div className="itemContainer">
        {productos && productos.map((product) => (<ItemDetail key={product.id} item={product} />
          ))}
      </div>
         
       
      </>
    )
  }

  export default ItemsListContainer
  

