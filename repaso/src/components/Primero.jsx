import { useEffect } from "react";
import { useState } from "react";

export const Primero = () => {
  const [estado, setEstado] = useState(() => ("Condicion Inicial"))
  const [contador, setContador] = useState(() => (0))
  const [lista, setLista] = useState(() => [
    {id: 1, title: "Lista 1"},
    {id: 2, title: "Lista 2"}
  ])
  const [inputValue, setInputValue] = useState("lorem ipsum")
  
  const sumar = () => setContador(contador + 1)
  const restar = () => setContador(contador - 1)

  const length = lista.length + 1
  const add = () => setLista([...lista,{id: {length}, title: `Lista ${length}`}])

  useEffect(() => {
    console.log('Efecto Secundario');
  }, [contador])

  let onChange = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  return(
    <>
      <p className="border">
        <h2>{estado}</h2>
        <p><button onClick={() => setEstado("Condicion Modificada")}>Cambiar Estado</button></p>
      </p>

      <p className="border">
        <h2>{contador}</h2>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </p>

      <p className="border">
        <h2>
          {lista.map( el => 
          <li key={el.id}>{el.title}</li>)}
        </h2>
        <button onClick={add}>Agregar Lista</button>
      </p>

      <p className="border">
        <input type="text" placeholder="Escribe Aquí" onChange={onChange} />
        <h2>{inputValue}</h2>
      </p>
    </>
  )
}