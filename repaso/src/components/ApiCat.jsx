import { useEffect } from "react"
import { useState } from "react"
import { Link } from 'react-router-dom';

export default function ApiCat () {
  const [state, setState] = useState('')
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  
  const getRandomFact = () => {
    setLoading(true)
    fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(response => {
      const {fact} = response
      setState(fact)
      setLoading(false)
    })
    .catch((error) => {
      console.error('Error: ', error)
    })
  }

  useEffect(() => {
    getRandomFact()
  }, [])

  useEffect(() => {
    const firstWord = state.split(' ', 1)

    setLoading(true)
    fetch(`https://cataas.com/cat/says/${firstWord}`)
    .then(res => res.blob())
    .then(response => {
      const imageUrl = URL.createObjectURL(response)
      setImage(imageUrl)
      setLoading(false)
    })
    .catch((error) => {
      console.error("Error: ", error)
    })
  }, [state])

  const handleClick = () => {
    getRandomFact()
  }

  return(
    <main>
      <Link to="/apis"><button>Volver Atrás</button></Link>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Traer otra cita</button>
      {loading ?
        <h2>Loading...</h2>
      : 
        <>
          <p>{state}</p>
          <img width="400" src={image} alt={`Imagen extraida de la primera palabra de: ${state}`} />              
        </>
      }
    </main>
  )
}

/*
main {
  display: flex;
  flex-direction: column;
  place-items: center;
  max-width: 800px;
  margin: 0 auto;
  font-family: system-ui;
}
*/