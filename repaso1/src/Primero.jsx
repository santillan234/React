import { useEffect } from "react";
import { useState } from "react";

export const Primero = () => {
  const [estado, setEstado] = useState(() => ("Condicion Inicial"))
  const [contador, setContador] = useState(() => (0))
  const [lista, setLista] = useState(() => [
    {id: 1, title: "Lista 1"},
    {id: 2, title: "Lista 2"}
  ])
  
  const sumar = () => setContador(contador + 1)
  const restar = () => setContador(contador - 1)

  const length = lista.length + 1
  const add = () => setLista([...lista,{id: {length}, title: `Lista ${length}`}])

  useEffect(() => {
    console.log('Efecto Secundario');
  }, [contador])

  return(
    <>
      <p style={{
        border: "solid 2px #888",
      }}>
        <h2>{estado}</h2>
        <p><button onClick={() => setEstado("Condicion Modificada")}>Cambiar Estado</button></p>
      </p>

      <p style={{
        border: "solid 2px #888",
      }}>
        <h2>{contador}</h2>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </p>

      <p style={{
        border: "solid 2px #888",
      }}>
        <h2>
          {lista.map( el => 
          <li key={el.id}>{el.title}</li>)}
        </h2>
        <button onClick={add}>Agregar Lista</button>
      </p>
    </>
  )
}