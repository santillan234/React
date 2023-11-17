import { useState } from "react"

export default function Contar () {
  const [estado, setEstado] = useState(() => ('Condicion inicial'));

  const [contador, setContador] = useState(() => (0));
  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1)
  
  const [lista, setLista] = useState(() => [
    {id: 1, title: "Lista 1"},
    {id: 2, title: "Lista 2"}
  ])
  const lengthSumar = (lista.length + 1)
  const add = () => setLista([...lista,{id: lengthSumar, title: `Lista ${lengthSumar}`}])

  return(
    <>
      <h1>{estado}, {contador} </h1>
      <button onClick={() => setEstado('Condicion secundaria')}>Cambiar Estado</button>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>

      <div>
        {lista.map(items => <h2 key={items.id}>{items.title}</h2>)}
        <button onClick={add}>Agregar</button>
      </div>
    </>
  )
};









