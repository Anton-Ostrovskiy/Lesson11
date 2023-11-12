import "./style.scss";
import { useEffect, useState } from "react";
import MobileMenu from "../mobileMenu/mobileMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const links = document.querySelectorAll(".nav__link");

      links.forEach((link, index) => {
        const section = document.querySelector(link.hash);
        const offset = section.offsetTop;

        if (
          offset <= position + 100 &&
          offset + section.offsetHeight > position + 100
        ) {
          setActiveLink(index);
        } else {
          link.classList.remove('active-link');
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={open ? "header bg__mobile" : "header"}>
        <div
          className={open ? "container wrapper reverse" : "container wrapper"}
        >
          <div
            className={open ? "burger active" : "burger"}
            onClick={() => setOpen(!open)}
          >
            <span></span>
          </div>
          <a href="#ideas" className="header__logo">
            <h3
              className={
                open ? "header__logo-title title-mobile" : "header__logo-title"
              }
            >
              Pearwood
            </h3>
          </a>

          <nav className={open ? "close nav" : "nav"}>
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#ideas"
                  className={`nav__link ${
                    activeLink === 0 ? "active-link" : ""
                  }`}
                >
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  className={`nav__link ${
                    activeLink === 1 ? "active-link" : ""
                  }`}
                >
                  About Us
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#provide"
                  className={`nav__link ${
                    activeLink === 2 ? "active-link" : ""
                  }`}
                >
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#projects"
                  className={`nav__link ${
                    activeLink === 3 ? "active-link" : ""
                  }`}
                >
                  Projects
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
