import { useState } from "react";
import { useEffect } from "react"


export default function Blog () {
  const [blog, setBlog] = useState(() => ("inicio"))
  
  useEffect(() => {
    console.log("Condicion Secundaria");
  }, [blog])

  return(
    <>
      <h1>{blog}</h1>
      <button onClick={() => setBlog("posteos")}>POSTEOS</button>
      <button onClick={() => setBlog("comentar")}>COMENTAR</button>
      <button onClick={() => setBlog("like")}>LIKE</button>
    </>
  )
}