//Podemos poner estilos en linea pero como un objeto.
// <article style={{ display: 'flex', color: 'orange'}}. No es lo recomendado
// para agregar el @antes del nombre del usuario podemos hacer lo siguiente: seria una funcion para agregar el arroba
// const addAt = (userName) => `@${userName}`
// y luego en span quedaria {addAt(userName)}
//COMO PROPS TAMBIEN PODEMOS PASAR FUNCIONES EN REACT
//TAMBIEN SE PUEDE PASAR ELEMENTOS HTML COMO PROPS

//CUAL ES LA DIFERENCIA ENTRE COMPONENTE Y ELEMENTO?
// un componente es una funcion que al ejecutarla te devuelve un elemento. los componentes crean elementos y los elementos son los que renderiza react
// un elemento es lo que renderiza react.

//LAS PROPS NO SE MODIFICAN, SON INMUTABLES

//la prop children es el hijo, lo que se estan envolviendo. el caso de seguir esta envuelto por button y button esta envuelto por aside.
//un children puede tener una cadena de texto o un elemento

// userName = 'unknow' Significa que cuando no viene un valor, por defecto vale unknow o lo que vos le pases

export function TwitterFollowCard ({formatUserName, userName = 'unknow', name, isFollowing}) {
  const imageSrc = `https://unavatar.io/${userName}` 

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt="el avatar de midudev" 
          //tambien podemos hacer lo siguiente: src={`https://unavatar.io/${userName}`}
          src={imageSrc}
        />
        <div className='tw-followCard-info'>
          <strong> {name} </strong>
          <span className='tw-followCard-infoUserName'> {formatUserName(userName)} </span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}