import {NavLink} from "react-router-dom";

export function Nav () {
  return(
    <nav style={{
        border: "solid 2px #646cff",
        marginBottom: '50px',
        padding: '20px',
        fontSize: '20px',
      }}>
      <div className="nav"><NavLink to="/">Inicio</NavLink></div>
      <div className="nav"><NavLink to="/useState">useState</NavLink></div>
      <div className="nav"><NavLink to="/reloj">RelojEffect</NavLink></div>
      <div className="nav"><NavLink to="/libros">Libros-useContext</NavLink></div>
      <div className="nav"><NavLink to="/contador">useReducer</NavLink></div>
    </nav>
  )
}
