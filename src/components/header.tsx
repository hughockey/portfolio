
function Header () {
  return (
    <header className="header-container">
      <h5 className="header-container__title">Hugo Lemieux</h5>
      <nav className="header-container__nav">
        {/* <a className="header-container__nav-link">Expertise</a>
        <a className="header-container__nav-link">À propos</a> */}
        <a className="header-container__nav-link">Contact</a>
        <a className="header-container__nav-link">|</a>
        <a>Réseaux sociaux</a>
      </nav>
    </header>
  )

}

export default Header