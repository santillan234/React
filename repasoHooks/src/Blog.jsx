import { useEffect } from "react"
import { useState } from "react"

export default function Blog (){
  const [recurso, setRecurso] = useState(() => ('posteos'));

  useEffect(() => {console.log('Efecto Secundario')}, [recurso])
  
  return(
    <>
      <div>
        <button onClick={() => setRecurso('posteos')}>Posteos</button>
        <button onClick={() => setRecurso('usuarios')}>Usuarios</button>
        <button onClick={() => setRecurso('comentarios')}>Comentarios</button>
      </div>
      <h2>{recurso}</h2>
    </>
  )
}