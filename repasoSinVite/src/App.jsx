import { useEffect, useState } from "react"

const CAT_FIRST_API = 'https://catfact.ninja/fact'
const CAT_IMAGE_API = 'https://cataas.com/cat/says/hello'

export const App = () => {
  const [fact, setFact] = useState()
  
  useEffect(() => {
    fetch(CAT_FIRST_API) // la API nos devuelve un json, el fetch nos devuelve una promesa
      .then(response => response.json()) //la respuesta la transformamos en json y nos vuelve a devolver otra promesa
      .then(data => setFact(data.fact)) //data nos devuelve todo el objeto de la API, y lo guardamos en el estado
  }, [])

  return(
    <>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </>
  )
}