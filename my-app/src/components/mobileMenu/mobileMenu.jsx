import "./style.scss";
const MobileMenu = ({active, setActive}) => {
  return (
    <nav className={active ? "menu active" : "menu"}>
      <div className="menu__content">
        <ul className="list">
          <li className="item">
            <a className="link" href="#!">
              Home
            </a>
          </li>
          <li className="item">
            <a className="link" href="#!">
              About Us
            </a>
          </li>
          <li className="item">
            <a className="link" href="#!">
              Services
            </a>
          </li>
          <li className="item">
            <a className="link" href="#!">
              Projects
            </a>
          </li>
          <li className="item">
            <a className="link" href="#!">
              Team
            </a>
          </li>
          <li className="item">
            <a className="link" href="#!">
              Career
            </a>
          </li>
          <li className="item">
            <a className="link" href="#!">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileMenu;
