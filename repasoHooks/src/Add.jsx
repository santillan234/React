import { useState } from "react"

export default function Add () {
  const [lista, setLista] = useState(() => [
    {id: 1, title: "Lista 1"},
    {id: 2, title: "Lista 2"}
  ])
  
  const cantidad = (lista.length + 1)
  const add = () => setLista([...lista,{id: cantidad, title: `Lista ${cantidad}`}])

  return(
    <>
      <div>
        {lista.map( items => <h2 key={items.id}>{items.title}</h2>)}
        <button onClick={add}>Agregar</button>
      </div>
    </>
  )
}