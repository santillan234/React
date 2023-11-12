//Un componente es una funcion que nos devuelve un elemento. Los componenten empiezan con mayuscula. Osea PascalCase
//esto es para que React diferencie que es un elemento JSX y no elemento html

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App />
)
