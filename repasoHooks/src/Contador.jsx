import { useState } from "react"

export function Contador (){
  const [contador, setContador] = useState(0)

  const sumar = () => setContador(contador + 1)
  const restar = () => setContador(contador - 1)
  
  return(
    <>
      <p style={{marginTop: '100px'}}>{contador}</p>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
    </>
  )
}