import { useReducer } from "react"
import confetti from "canvas-confetti"

const initialState = {
  name: '',
  password: '',
  logIn: false,
  error: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FIELDS':
      return {
        ...state,
        [action.field]: action.payload,
        error: ''
      }

    case 'LOGIN':
      return {
        ...state,
        logIn: true
      }

    case 'LOGOUT':
      return {
        ...state,
        logIn: false,
        name: state.name,
        password: '',
        error: ''
      }

    case 'ERROR':
      return {
        ...state,
        error: 'INCORRECT NAME OR PASSWORD'
      }

    default:
      return state;
  }
}

export default function Login () {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleSubmit = (event) => {
    event.preventDefault()

    try {
      if (state.name === "Rodrigo" && state.password === '123') {
        dispatch({type: 'LOGIN'})
        confetti()
      } else {
        throw Error
      }
    } catch (error) {
      dispatch({type: 'ERROR'})
    }
  }

  return(
    <div>
      {state.logIn ? 
        <div>
          <h1>Welcome</h1>
          <button onClick={() => dispatch({type: 'LOGOUT'})}>Log Out</button>
        </div>
        :
        <form className="form" onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Name"
            value={state.name}
            onChange={(event) => {
              dispatch({type: 'FIELDS', field: 'name', payload: event.target.value})
            }}
          />
          <input 
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(event) => {
              dispatch({type: 'FIELDS', field: 'password', payload: event.target.value})
            }} 
          />
          <button>Log In</button>
          <p className="error">{state.error}</p>
        </form>
      }
    </div>
  )
}