import { useEffect} from "react";
import "./style.scss";
const MobileMenu = ({ active, setActive }) => {
  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
      return;
    }
    document.body.style.overflowY = "auto";
  }, [active]);
  return (
    <nav className={active ? "menu active" : "menu"}>
      <ul className="list">
        <li className="item" onClick={() => setActive(!active)}>
          <a className="link" href="#ideas">
            Home
          </a>
        </li>
        <li className="item" onClick={() => setActive(!active)}>
          <a className="link" href="#about">
            About Us
          </a>
        </li>
        <li className="item" onClick={() => setActive(!active)}>
          <a className="link" href="#provide">
            Services
          </a>
        </li>
        <li className="item" onClick={() => setActive(!active)}>
          <a className="link" href="#projects">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
