import "./bienvenido.css"

function ItemsListContainer(props) {
  return (
    <>
      <h1 className="bienvenido" >{props.texto}</h1>
    </>
  )
}

export default ItemsListContainer
