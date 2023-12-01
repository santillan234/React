import {NavLink} from "react-router-dom";

export function Nav () {
  return(
    <nav style={{
      border: "solid 2px #646cff",
      width: '100vh',
      marginBottom: '50px'
    }}>
      <ul style={{
        listStyle: 'none'
      }}>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/useState">useState</NavLink></li>
        <li><NavLink to="/reloj">RelojEffect</NavLink></li>
        <li><NavLink to="/libros">Libros - useContext</NavLink></li>
        <li><NavLink to="/contador">useReducer</NavLink></li>
      </ul>
    </nav>
  )
}
