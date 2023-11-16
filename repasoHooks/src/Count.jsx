import { useState } from "react"

export function Count (){
  const [estado, setEstado] = useState('Hola!');
  
  const [contador, setContador] = useState(0);
  const sumar = () => setContador(contador + 1);
  const restar = ()=> setContador(contador - 1);
  
  return(
    <>
      <p>
        <h1>{estado} </h1>
        <button onClick={() => setEstado('Te amo HERMOSA!')} >Haceme click Reina!</button>
      </p>
      <p>
        <h1>{contador}</h1>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </p>
    </>
  )
}