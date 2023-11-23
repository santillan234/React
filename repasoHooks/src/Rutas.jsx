import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contar from "./Contar";

export default function Rutas () {
  return(
    <Router>
      <Routes>
        <Route path="/" element={Contar}/>
      </Routes>
    </Router>
  )
}