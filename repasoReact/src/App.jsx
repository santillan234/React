// <React.Fragment> es igual que <>
// isFollowing es lo mismo que isFollowing={true}. 
// !isFollowing no existe como isFollowing={false}

import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  const format = (userName) => `@${userName}`
  
  const RoSantillan = { isFollowing: true, userName: 'RoSantillan', name: "Rodrigo Santillan"} //Esto es para pasar todas las props como un objeto ya que son muchas y no queres escribir. No es muy recomendado

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
    </section>
  )
}