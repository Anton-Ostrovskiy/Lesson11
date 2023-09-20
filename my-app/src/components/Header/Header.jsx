import "./style.scss";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container wrapper">
        <a className="header__logo">
          <img className="header__logo-title" src={logo} alt="logo" />
        </a>
        <input className="menu__btn" type="checkbox" id="menu__btn" />
        <label className="menu__icon" for="menu__btn">
          <span className="nav__icon"></span>
        </label>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                About Us
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Team
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Career
              </a>
            </li>
          </ul>
        </nav>
        <a href="#" className="nav__btn">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;
