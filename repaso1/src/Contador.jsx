import { useReducer } from "react";
import { TYPES } from "./actions/action";
import { reducer, initialState } from "./reducer/reducer";

export const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sumar = () => dispatch({type: TYPES.incrementar})
  const restar = () => dispatch({type: TYPES.decrementar})
  const sumar2 = () => dispatch({type: TYPES.incrementar2, payload: 2})  
  const restar2 = () => dispatch({type: TYPES.decrementar2, payload: 2})
  const reiniciar = () => dispatch({type: TYPES.reiniciar})
  
  return(
    <>
      <h1>Contador con useReducer</h1>
      <p>{state.counter}</p>
      <button onClick={sumar}>Sumar 1</button>
      <button onClick={restar}>Restar 1</button>
      <button onClick={sumar2}>Sumar 2</button>
      <button onClick={restar2}>Restar 2</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </>
  )
}