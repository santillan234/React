import {NavLink} from "react-router-dom";

export function Nav () {
  return(
    <nav>
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/primero">Primero</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/reloj">RelojEffect</NavLink></li>
        <li><NavLink to="/Libros">Libros</NavLink></li>
      </ul>
    </nav>
  )
}