import "./style.scss";
import logo from "../../images/logo.svg";
import { useState } from "react";
import MobileMenu from "../mobileMenu/mobileMenu";

const Header = () => {
  const [burger, setBurger] = useState(false);
  return (
    <>
      <header className={burger ? "header bg__mobile" : "header"}>
        <div className={burger ? "container wrapper reverse" : "container wrapper"}>
          <div
            className={burger ? "burger active" : "burger"}
            onClick={() => setBurger(!burger)}
          >
            <span></span>
          </div>
          <a href="#!" className="header__logo">
            <img className="header__logo-title" src={logo} alt="logo" />
          </a>

          <nav className={burger ? "close nav" : "nav"}>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#!" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#!" className="nav__link">
                  About Us
                </a>
              </li>
              <li className="nav__item">
                <a href="#!" className="nav__link">
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#!" className="nav__link">
                  Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#!" className="nav__link">
                  Team
                </a>
              </li>
              <li className="nav__item">
                <a href="#!" className="nav__link">
                  Career
                </a>
              </li>
            </ul>
          </nav>
          <a href="#!" className={burger ? "close nav__btn " : "  nav__btn"}>
            <p>Contact Us</p>
          </a>
        </div>
      </header>
      <MobileMenu active={burger} setActive={setBurger} />
    </>
  );
};

export default Header;
