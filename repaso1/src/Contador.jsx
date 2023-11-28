import { useReducer } from "react";
import { TYPES } from "./actions/actions";
import { reducer, initialState } from "./reducer/reducer";

export default function Contador () {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sumar = () => dispatch({type: TYPES.incrementar})
  
  return(
    <>
      <h1>{state.counter}</h1>
      <button onClick={sumar}>Sumar</button>
    </>
  )
}