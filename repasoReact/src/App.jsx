//Podemos poner estilos en linea pero como un objeto.
// <article style={{ display: 'flex', color: 'orange'}}

export function App () {
  return (
    <article>
      <header>
        <img alt="el avatar de midudev" src="https://unavatar.io/midudev" />
        <div>
          <strong>Miguel Angel Duran</strong>
          <span>@midudev</span>
        </div>
      </header>

      <aside>
        <button>
          Seguir
        </button>
      </aside>
    </article>
  )
}