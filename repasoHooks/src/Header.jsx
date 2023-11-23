import { useContext } from "react";
import { ThemeContext } from "./Tema";

export const Header = () => {
  const {theme, handleTheme} = useContext(ThemeContext);

  let element = document.body;
  element.className=theme;

  return(
    <header className={theme}>
      <form>
        <fieldset>
          <label htmlFor="light">Light</label>
          <input type="radio" name="same" id="light" value="light" onClick={handleTheme}/>
          <label htmlFor="dark">Dark</label>
          <input type="radio" name="same" id="dark" value="dark" onClick={handleTheme}/>
        </fieldset>
      </form>
    </header>
  )
}