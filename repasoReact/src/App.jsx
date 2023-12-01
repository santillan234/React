import './App.css'
import { Repaso } from './Repaso'
import {Tarjeta} from './Tarjeta'
import { Props } from './Props'
import { Button } from './Button'
import { Section } from './Section'
import { Spread } from './Spread'
import { Estado } from './Estado'

export function App () {
  return (
    <section className='App'>
      <Repaso />
      <Tarjeta />
      <Props 
        title="Dulce"
        cadena= "Rodrigo"
        numero={1}
        arreglo={[1,2,3,"Jose"]}
        objeto={{
          nombre: "Julian",
          apellido: "Alvarez"
        }}
        funcion={ () => 3*4}
        elementoJSX={<p>Hola, soy un parrafo</p>}
        componenteReact={<Button />}
      />

      <Section> Contenido Estatico </Section>

      <Spread />

      <Estado />
    </section>
  )
}