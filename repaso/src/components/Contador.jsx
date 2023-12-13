import { useReducer } from "react"
import { TYPES } from "../actions/action"
import { initialState, reducer } from "../reducer/reducer"

export const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const sumar = () => dispatch({type: TYPES.incrementar})
  const restar = () => dispatch({type: TYPES.decrementar})
  const sumar2 = () => dispatch({type: TYPES.incrementar2, payload: 2})
  const restar2 = () => dispatch({type: TYPES.decrementar2, payload: 2})
  const reiniciar = () => dispatch({type: TYPES.reiniciar})

  return(
    <>
      <h1>Contador</h1>
      <h2>{state.counter}</h2>
      <button onClick={sumar}>SUMAR 1</button>
      <button onClick={restar}>RESTAR 1</button>
      <button onClick={sumar2}>SUMAR 2</button>
      <button onClick={restar2}>RESTAR 2</button>
      <button onClick={reiniciar}>REINICIAR</button>
    </>
  )
}