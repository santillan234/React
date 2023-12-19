import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import { Nav } from "./components/Nav"
import Inicio from "./components/Inicio"
import { Primero } from "./components/Primero"
import RelojEffect from "./components/RelojEffect"
import Libros from "./components/Libros"
import { BookList } from "./components/BookList"
import Tema from "./components/Tema"
import Header from "./components/Header"
import { Contador } from "./components/Contador"
import Mouse from "./components/Mouse"
import Form from "./components/Form"
import Login from "./components/Login"
import Carrito from "./components/Carrito"
import Apis from "./components/Apis"
import ApiCat from "./components/ApiCat"
import ApiPeliculas from "./components/ApiPeliculas"
import ApiBreaking from "./components/ApiBreaking"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/useState" element={<Primero />}/>
        <Route path="/reloj" element={<RelojEffect />}/>
        <Route path="/libros" element={<Libros> <BookList/> </Libros>}/>
        <Route path="/contador" element={<Contador />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/apis" element={<Apis />} />
        <Route path="/apis/cat" element={<ApiCat />} />
        <Route path="/apis/peliculas" element={<ApiPeliculas />} />
        <Route path="/apis/breaking-bad" element={<ApiBreaking />} />
      </Routes>
      <Tema> <Header /> </Tema>
      <Mouse />
    </Router>
  )
}

export default App