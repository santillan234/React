// props = {
// title: ""  
//}

export function Props (propiedades){
  return(
    <>
      <h1> {propiedades.cadena} </h1>
      <ul>
        <li> {propiedades.numero} </li>
        <li> {propiedades.booleano} </li>
        <li> {propiedades.arreglo} </li>
        <li> {propiedades.objeto.nombre} </li>
        <li> {propiedades.funcion()} </li>
        <li> {propiedades.elementoJSX} </li>
        <p> {propiedades.componenteReact} </p>
      </ul>
    </>
  )
}