import { Button } from "./Button"


export function Tarjeta () {
  const estilos = {
    border: "solid 2px black",
    width: "200px",
    height: "275px",
    textAlign: "center"
  }

  const lista = [1,2,3]
  const [Uno,Dos,Tres] = lista

  const objeto = {
    id: 1,
    nombre: "Rodrigo",
    apellido: "Santillan"
  }
  const {id, nombre, apellido} = objeto

  return(
    <figure style={estilos}>
      <figcaption>
        <h1>Villa Langostura</h1>
        <p>Un hermoso lugar para pasar las vacaciones</p>
      </figcaption>
      <p>
        {Uno} {Dos} {Tres}
      </p>
      <p>
        {id} {nombre} {apellido}
      </p>
      <Button />
    </figure>
  )
}
