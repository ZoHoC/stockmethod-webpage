import { Link } from "react-router-dom";
import logo from "../images/Logo.png";

export default function Header(props) {
  const navToggle = props.toggle ? "nav-open" : "";
  return (
    <header className={`header ${navToggle}`}>
      <div className="header__nav-container">
        <div className="header__logo-image">
          <Link to="#" className="home__link" onClick={props.handleClickHome}>
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <button className="nav-toggle display" aria-label="toggle navigation" onClick={props.handleClick}>
          <span className="hamburger accent"></span>
        </button>
        <nav className="header__nav">
          <ul className="header__nav__list">
            <li className="header__nav__item">
              <Link to="#" className="header__nav__link" onClick={props.handleClick}>
                Learn
              </Link>
            </li>
            <li className="header__nav__item">
              <Link to="#" className="header__nav__link" onClick={props.handleClick}>
                Join community
              </Link>
            </li>
            <li className="header__nav__item">
              <Link to="#" className="header__nav__link" onClick={props.handleClick}>
                About
              </Link>
            </li>
            <li className="header__nav__item">
              <Link to="#" className="header__nav__link" onClick={props.handleClick}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
