import './App.css'
import { useState } from 'react'
import { Contador } from './Contador'
import { Count } from './Count'

export function App() {
  const [estado, setEstado] = useState('Condicion inicial')

  return (
    <>
      <div>{estado}</div>
      <button onClick={() => setEstado('Condicion modificada')} >Cambiar Estado</button>
      <Contador />
      <Count />
    </>
  )
}

