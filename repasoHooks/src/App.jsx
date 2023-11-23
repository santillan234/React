import './App.css'
import Blog from './Blog'
import Contar from './Contar'
import RelojEffect from './RelojEffect'
import { Libros } from './Libros'
import { BookList } from './BookList'
import { Header } from './Header'
import { Tema } from './Tema'

export function App() {

  return (
    <>
      <Contar />
      <Blog />
      <RelojEffect />
      <Libros>
        <BookList />
      </Libros>
      <Tema>
        <Header />
      </Tema>
    </>
  )
}

