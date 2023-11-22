import './App.css'
import Blog from './Blog'
import { BooksLista } from './BooksLista'
import Contar from './Contar'
import { Libros } from './Libros'
import RelojEffect from './RelojEffect'
import { Header } from './Header'

export function App() {

  return (
    <>
      <Contar />
      <Blog />
      <RelojEffect />
      <Libros>
        <BooksLista />
      </Libros>
      <Header />
    </>
  )
}

