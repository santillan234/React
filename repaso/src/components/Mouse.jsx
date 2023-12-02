import { useEffect, useState } from "react"

export default function Mouse () {
  const [activar, setActivar] = useState(false)
  const [posicion, setPosicion] = useState({ x:0, y:0})

  useEffect(() => {
    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosicion({x: clientX, y:clientY})
    }

    if(activar) {
      window.addEventListener('pointermove', handleMove)
    }
    return() => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [activar])


  return(
    <>
      <div style={{
        display: `${activar ? 'block' : 'none'}`,
        position: 'absolute',
        backgroundColor: '#646cff',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: '50px',
        height: '50px',
        transform: `translate(${posicion.x}px, ${posicion.y}px)`
      }}/>
      <button onClick={() => setActivar(!activar)}>
        {activar ? 'DESACTIVAR' : 'ACTIVAR'} seguir puntero
      </button>
    </>
  )
}