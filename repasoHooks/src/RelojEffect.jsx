import { useState, useEffect } from "react";

function Reloj ({hora}) {
  return(
    <h3>{hora}</h3>
  )
}

export default function RelojEffect () {
  const [hora, setHora] = useState(() => new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(() => false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    }
    else {
      clearInterval(temporizador)
    }
    return () => {
      clearInterval(temporizador)
    }
  }, [visible])
  
  return(
    <>
      <h1>Reloj Con Hooks</h1>
      {visible ? <Reloj hora={hora}/> : null}
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
    </>
  )
};