import { useContext } from "react"
import { ThemeContext } from "./Tema"

export default function Header () {
  const {theme, handleTheme} = useContext(ThemeContext);
  
  return(
    <header 
      className={theme} 
      style={{
        marginTop: "50px",
        display: 'flex',
        justifyContent: 'center',
        }}>
      <form style={{width: '150px'}}>
        <fieldset>
          <label htmlFor="light">Light</label>
          <input type="radio" name="same" id="light" value="light" onClick={handleTheme} />
          <label htmlFor="dark">Dark</label>
          <input type="radio" name="same" id="dark" value="dark" onClick={handleTheme} />
        </fieldset>
      </form>
    </header>
  )
}