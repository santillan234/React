import './App.css'
import Blog from './Blog'
import { BookList } from './BookList'
import { Books} from './Books'
import Contar from './Contar'
import RelojEffect from './RelojEffect'

export function App() {

  return (
    <>
      <Contar />
      <Blog />
      <RelojEffect />
      <Books>
        <BookList />
      </Books>
    </>
  )
}

