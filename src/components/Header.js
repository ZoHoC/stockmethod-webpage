import { Link } from "react-router-dom";

export default function Header(props) {
  const navToggle = props.toggle ? "nav-open" : "";
  return (
    <header className={navToggle}>
      <div className="nav__container">
        <div className="header__logo">
          <Link to="#" className="XXXXX" onClick={props.handleClick}>
            LOGO Stock Method
          </Link>
        </div>
        <button className="nav-toggle display" aria-label="toggle navigation" onClick={props.handleClick}>
          <span className="hamburger accent"></span>
        </button>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="#" className="nav__link" onClick={props.handleClick}>
                Learn
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#" className="nav__link" onClick={props.handleClick}>
                Join community
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#" className="nav__link" onClick={props.handleClick}>
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#" className="nav__link" onClick={props.handleClick}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
