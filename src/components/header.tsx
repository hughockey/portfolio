import { BsLinkedin, BsGithub } from "react-icons/bs"
function Header () {
  return (
    <header className="header-container">
      <h4 className="header-container__logo">HL</h4>
      <nav className="header-container__nav">
        <div className="header-container__nav__socials">
          <a href="https://www.linkedin.com/in/hugo-lemieux/" target="_blank"><BsLinkedin /></a>
          <a href="https://github.com/hughockey" target="_blank"><BsGithub /></a>
        </div>
        <button type="button" className="header-container__nav__contact-button">Contactez-moi</button>
      </nav>
      
    </header>
  )

}

export default Header