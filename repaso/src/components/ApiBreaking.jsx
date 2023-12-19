import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ApiBreaking () {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState('')

  const getRandomQuote = async () => {
    try {
      setLoading(true)
      const url = "https://api.breakingbadquotes.xyz/v1/quotes"
      const res = await fetch(url)
      const [response] = await res.json()
      const {quote, author} = response
      setState({quote, author}) 
      setLoading(false)
    } catch (error) {
      console.error("Error: ", error)
    }
  }

  useEffect(() => {
    getRandomQuote()
  }, [])

  useEffect(() => {
    const twoWords = state.author

    setLoading(true)
    fetch(`https://cataas.com/cat/says/${twoWords}`)
    .then(response => response.blob())
    .then(res => {
      const newImage = URL.createObjectURL(res)
      setImage(newImage)
      setLoading(false)
    })
    .catch((error) => {
      console.error("Error: ", error)
    })
  }, [state])

  const handleClick = () => {
    getRandomQuote()
  }

  return(
    <>
      <Link to="/apis"><button>Volver Atrás</button></Link>
      <h1>App Breaking Bad</h1>
      <div style={{
          display: 'flex',
          margin: '0 auto',
          width: '250px'    
        }}> 
        <img 
          width="250" 
          src="https://logospng.org/download/breaking-bad/logo-breaking-bad-2048.png" 
          alt="Logo breaking bad"
        />
      </div>
      <button onClick={handleClick}>Traer otra cita</button>
        {loading ?
          <h2>Loading...</h2>
        :
          <div>
            <p>
              {state.quote}
              <br />
              -{state.author}
            </p>
          </div>
        }
      <img
        width="300"
        src={image} 
        alt={`Imagen extraida de las 2 palabras del author: ${state.author}`}
      />
    </>
  )
}

/*const getRandomQuote = async () => {
  fetch('https://api.breakingbadquotes.xyz/v1/quotes')
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
      const [newQuote] = data
      const {quote, author} = newQuote
      setState({quote: quote, author: author})
    } else {
      console.error("No se recibieron datos validos desde la API")
    }
  })
  .catch(error => {
    console.error('Error al obtener los datos: ', error )
  })
} */