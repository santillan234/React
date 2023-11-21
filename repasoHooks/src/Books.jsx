// 1er paso: import createContext
// 2do paso: exportamos una constante asignandole createContext() para crear el contexto.
// La exportamos porque luega la tenemos que utilizar en el componente que quieramos
// 3er paso: creamos nuestro componente que va a recibir props
// Este componente tiene un estado global que vamos a disponibilizar a traves de context
// 4to paso: en este mismo contexto tenemos que retornar lo que se va a renderizar
// retornamos el componente que creamos en el 2do paso y le agregamos .Provider y un value={la variable del useState inicial}
// y dentro del componente que retornamos, le pasamos {props.children}
// este componente es el proveedor del estado global y pasamos el mismo a traves del valor unico que recibe la propiedad value
// value es la data que vamos a estar transfiriendo y le vamos a dar el valor de nuestro estado inicial
// props.children va a tomar todo lo que se tome en los tags de inicio y cierre del componente que estemos armando
// ESTE COMPONENTE ES NUESTRO PROVEEDOR DE CONTEXTO

//EL ULTIMO PASO ES DISPONIBILIZAR EL ESTADO GLOBAL QUE HEMOS CREADO en nuestro componente principal App. TENEMOS QUE COLOCAR DENTRO DE NUESTRO COMPONENTE PRINCIPAL:
//QUE EN ESTE CASO SERIA Books, todos los componentes que queremos que tengan acceso a dicho estado global
// y cuando llamemos a BooksList en App y le encerremos un componente por dentro. Ese componente por dentro va a tener acceso a ese estado que creamos en Books
// todo los componentes que encerremos dentro de este componente <Books> </Books> van tener acceso al estado book que creamos aca

import { createContext, useState } from "react";

export const BooksContext = createContext();

export const Books = (props) => {
  const [book, setBooks] = useState(() => [
    {id: 1, title: "Codigo Da Vinci", author: 'Rodrigo Santillan'},
    {id: 2, title: "Harry Potter", author: 'Azucena Avila'}
  ])

  return(
    <BooksContext.Provider value={book}>
      {props.children}
    </BooksContext.Provider>
  );
};