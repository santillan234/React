export function Repaso () {
  let name = "Rodrigo"

  const estilos = {color: 'white', backgroundColor: 'orange', textAlign: 'center', padding: 10}

  const textos = {
    textoUno: "Esto es un texto 1",
    textoDos: "Esto es un texto 2",
    textoTres: "Esto es un texto 3"
  }

  const lista = [1, 2, 3, 4]
  //RENDERIZAR LISTAS EN JSX
  const listaMapeada = lista.map(item => <li> {item} </li>)

  const listaObjeto = [
    {id: "1", text: "item1"},
    {id: "2", text: "item2"},
    {id: "3", text: "item3"}
  ]

  return (
    <div style={estilos}>
      <h1> Hola {name} </h1>
      <p style={{color: 'black'}}> Esta es nuestra primera app en React</p>
      <h1> {textos.textoUno} </h1>
      <h2> {textos.textoDos} </h2>
      <h3> {textos.textoTres} </h3>
      <ul> {listaMapeada} </ul>
      <ul> {listaObjeto.map(item => (<li key={item.id} > {item.text} </li>))} </ul>
    </div>
  )
}