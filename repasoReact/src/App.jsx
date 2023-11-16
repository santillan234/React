// <React.Fragment> es igual que <>
// isFollowing es lo mismo que isFollowing={true}. 
// !isFollowing no existe como isFollowing={false}

import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import { Repaso } from './Repaso'
import {Tarjeta} from './Tarjeta'
import { Props } from './Props'
import { Button } from './Button'
import { Section } from './Section'
import { Spread } from './Spread'
import { Estado } from './Estado'

export function App () {
  const format = (userName) => `@${userName}`
  
  const RoSantillan = { isFollowing: true, userName: 'RoSantillan', name: "Rodrigo Santillan"} //Esto es para pasar todas las props como un objeto ya que son muchas y no queres escribir. No es muy recomendado

  const string = "Contenido dinamico"

  return (
    <section className='App'>
      <TwitterFollowCard 
        formatUserName={format}  
        {...RoSantillan} 
      />

      <TwitterFollowCard 
        formatUserName={format} 
        isFollowing
        name="Dulce Pillco" 
      />
      
      <TwitterFollowCard 
        formatUserName={format} 
        isFollowing={false} 
        userName="AzuAvila" 
        name="Azucena Avila" 
      />

      <Repaso />
      <Tarjeta />
      <Props 
        title="Dulce"
        cadena= "Rodrigo"
        numero={1}
        booleano={true? "Verdadero" : "Falso"}
        arreglo={[1,2,3,"Jose"]}
        objeto={{
          nombre: "Julian",
          apellido: "Alvarez"
        }}
        funcion={ () => 3*4}
        elementoJSX={<p>Hola, soy un parrafo</p>}
        componenteReact={<Button />}
      />

      <Section> {string} </Section>
      <Section> Contenido Estatico </Section>

      <Spread />

      <Estado />
    </section>
  )
}