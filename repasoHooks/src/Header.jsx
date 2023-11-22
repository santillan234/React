export function Header () {
  return(
    <header>
      <form>
        <fieldset>
          <label htmlFor="light">Light</label>
          <input type="radio" name="same" id="light" value="light" />
          <label htmlFor="dark">Dark</label>
          <input type="radio" name="same" id="dark" value="dark" />
        </fieldset>
      </form>
    </header>
  )
}