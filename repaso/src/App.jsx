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
      </Routes>
      <Tema> <Header /> </Tema>
    </Router>
  )
}

export default App