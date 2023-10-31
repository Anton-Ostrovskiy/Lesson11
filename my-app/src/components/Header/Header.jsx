import "./style.scss";
import { useState } from "react";
import MobileMenu from "../mobileMenu/mobileMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className={open ? "header bg__mobile" : "header"}>
        <div className={open ? "container wrapper reverse" : "container wrapper"}>
          <div
            className={open ? "burger active" : "burger"}
            onClick={() => setOpen(!open)}
          >
            <span></span>
          </div>
          <a href="#!" className="header__logo">
            <h3 className={open ? "header__logo-title title-mobile" : "header__logo-title"}>Pearwood</h3>
          </a>

          <nav className={open ? "close nav" : "nav"}>
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
          <a href="#!" className={open ? "close nav__btn " : "  nav__btn"}>
            <span>Contact Us</span>
          </a>
        </div>
      </header>
      <MobileMenu active={open} setActive={setOpen} />
    </>
  );
};

export default Header;
