import {NavLink} from "react-router-dom";

export function Nav () {
  return(
    <nav style={{
        border: "solid 2px #646cff",
        marginBottom: '50px',
        padding: '20px',
        fontSize: '20px',
        width: 'fit-content'
      }}>
      <div className="nav"><NavLink to="/">Inicio</NavLink></div>
      <div className="nav"><NavLink to="/useState">useState</NavLink></div>
      <div className="nav"><NavLink to="/reloj">RelojEffect</NavLink></div>
      <div className="nav"><NavLink to="/libros">Libros-useContext</NavLink></div>
      <div className="nav"><NavLink to="/contador">useReducer</NavLink></div>
      <div className="nav"><NavLink to="/form">Form</NavLink></div>
      <div className="nav"><NavLink to="/login">Login</NavLink></div>
      <div className="nav"><NavLink to="/carrito">Carrito</NavLink></div>
      <div className="nav"><NavLink to="/apis">APIS</NavLink></div>
    </nav>
  )
}
