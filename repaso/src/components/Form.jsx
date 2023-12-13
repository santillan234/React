import { useReducer } from "react"

const initialState = {
  name: '',
  nameValidation: true,
  email: '',
  emailValidation: true,
  gender: '',
  genderValidation: true,
  birthday: '',
  birthdayValidation: true,
  error: '',
  logIn: false
}

const reducer = (state, action) => {
  switch(action.type){
    case 'NAME_FIELD':
      return {
        ...state,
        name: action.payload,
        error: '', //limpiar el error al cambiar el valor del campo name
        nameValidation: true //limpiar el validation al cambiar el valor del campo name
      }
    case 'EMAIL_FIELD':
      return {
        ...state,
        email: action.payload,
        error: '', 
        emailValidation: true
      }

    case 'GENDER_FIELD':
      return {
        ...state,
        gender: action.payload,
        error: '',
        genderValidation: true
      }

    case 'BIRTHDAY_FIELD':
      return {
        ...state,
        birthday: action.payload,
        error: '',
        birthdayValidation: true,
      }

    case 'VALIDATION':
      return {
        ...state,
        nameValidation: false,
        emailValidation: false,
        genderValidation: false,
        birthdayValidation: false
      }

    case 'ERROR':
      return {
        ...state,
        error: action.payload
      }

    case 'LOGIN':
      return {
        ...state,
        logIn: true,
      }

    case 'LOGOUT':
      return {
        ...state,
        logIn: false
      }

    case 'CLEAR_FIELDS':
      return initialState

    default:
      return state;
  }
}

export default function Form () {
  const [state, dispatch] = useReducer(reducer, initialState)

  const validation = () => {
    dispatch({type: 'VALIDATION'})
  
    if (!state.name.trim()) {
      dispatch({ type: 'ERROR', payload: 'El campo nombre no puede estar vacío' });
    } else if (!state.email.trim()) {
      dispatch({ type: 'ERROR', payload: 'El campo email no puede estar vacío' });
    } else if (!state.gender.trim()) {
      dispatch({ type: 'ERROR', payload: 'El campo género no puede estar vacío' });
    } else if (!state.birthday.trim()) {
      dispatch({ type: 'ERROR', payload: 'El campo fecha de nacimiento no puede estar vacío' });
    } else if (new Date().getFullYear() - new Date(state.birthday).getFullYear() <= 18) {
      dispatch({type: 'ERROR', payload: 'El usuario deber ser mayor de edad'})
    } else {
      dispatch({type: 'LOGIN'})
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    validation()
  }

  return (
    <>
      {state.logIn ? 
        <div>
          <h2>Gracias {state.name}, el formulario fue enviado con exito!</h2>
          <ul style={{listStyle: 'none'}}>
            <li>Nombre: {state.name}</li>
            <li>Email: {state.email}</li>
            <li>Genero: {state.gender}</li>
            <li>Fecha de nacimiento: {state.birthday}</li>
          </ul>
          <button onClick={() => {
            dispatch({type: 'LOGOUT'})
            dispatch({type: 'CLEAR_FIELDS'})
            }}>Volver atras</button>
        </div>
      : 
        <form className="form" onSubmit={handleSubmit}>
          <input 
            style={{border: state.nameValidation ? '' : '1px solid red' }}
            type="text"
            placeholder="Nombre"
            value={state.name}
            onChange={(event) => {
              dispatch({type: 'NAME_FIELD', payload: event.target.value})
            }}
          />

          <input 
            style={{border: state.emailValidation ? '' : '1px solid red' }}
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={(event) => {
              dispatch({type: 'EMAIL_FIELD', payload: event.target.value})
            }} 
          />

          <input
            style={{border: state.genderValidation ? '' : '1px solid red' }}
            type="text"
            placeholder="Genero"
            value={state.gender}
            onChange={(e) => {
              dispatch({type: 'GENDER_FIELD', payload: e.target.value})
            }}
            list='Gender'
          />
          <datalist id="Gender">
            <option label="Masculino" value="Masculino" />
            <option label="Femenino" value="Femenino" />
            <option label="Otros" value="Otros" />
          </datalist>

          <input
            style={{border: state.birthdayValidation ? '' : '1px solid red' }}
            type="date" 
            placeholder="Fecha de Nacimiento"
            value={state.birthday}
            onChange={(e) => {
              dispatch({type: 'BIRTHDAY_FIELD', payload: e.target.value})
            }}
          />

          <button>Enviar</button>
          {state.error && <p className="error">{state.error}</p>}   
        </form>
      }      
    </>
  )
}