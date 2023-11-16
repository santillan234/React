//Un estado es una variable que aloja informacion que puede ir cambiando, si esa informacion cambia el componente se actualiza

//QUE SON LOS HOOKS?
//Son funciones nativas especiales que te permiten trabajar con el estado de un componente, 
//asi como tambien otras caracteristicas como ciclo de vida, referencias, context, etc
//permiten añadirle a los componente funcionales caracteristicas

//PARA DECLARAR Y ACTUALIZAR EL ESTADO, UTILIZAMOS EL HOOK useState.
//useState es una funcion que crea internamente una variable donde podremos almacenar el estado de nuestro componente
//Acepta un valor inicial para esa variable y devuelve un array con dos elementos: el valor de la variable y la funcion para modificarla

import { useState } from "react";

export function Estado () {
  const [estado, setEstado] = useState('Estado inicial')

  return(
    <div>
      <p> {estado} </p>
      <button onClick={ () => setEstado("Estado modificado")} >Cambiar Estado</button>
    </div>

  )
}