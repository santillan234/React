export function Spread (){
  const array1 = [1,2,3]
  const array2 = [4,5,6]

  //sin operador spread
  const array3 = [array1,array2]

  //con operador spread
  const array4 = [...array1, ...array2]
  
  return(
    <p>
      {array3} {array4}
    </p>  
  )
}