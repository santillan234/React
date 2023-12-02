import { useState, useEffect } from "react"

export default function RelojEffect () {
  const [visible, setVisible] = useState(false)
  const [hora, setHora] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    let temporizador;
    if (visible) {
      temporizador = setInterval( () =>
        setHora(new Date().toLocaleTimeString())
        , 1000)
    } else {
      clearInterval(temporizador)
    }
    return () => {
      clearInterval(temporizador)
    }
  }, [visible])
  
  return(
    <>
      <h1>Reloj</h1>
      {visible ? <h2>{hora}</h2> : null}
      <button onClick={() => setVisible(!visible)}>{visible ? 'Detener' : 'Activar'}</button>
    </>
  )
}