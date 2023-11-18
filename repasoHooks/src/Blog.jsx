import { useState } from "react";
import { useEffect } from "react";

export default function Blog () {
  const [estado, setEstado] = useState(() => ('Condicion inicial'))
  
  useEffect(() => {
    console.log('Efecto Secundario');
  }, [estado])

  return(
    <div>
      <h1>{estado}</h1>
      <button onClick={() => setEstado('posteo')}>Posteo</button>
      <button onClick={() => setEstado('comentar')}>Comentar</button>
      <button onClick={() => setEstado('me gusta')}>Me gusta</button>
    </div>
  )
}