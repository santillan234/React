import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import { Nav } from "./Nav"
import Inicio from "./Inicio"
import { Primero } from "./Primero"
import RelojEffect from "./RelojEffect"
import Libros from "./Libros"
import { BookList } from "./BookList"
import Tema from "./Tema"
import Header from "./Header"
import { Contador } from "./Contador"

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