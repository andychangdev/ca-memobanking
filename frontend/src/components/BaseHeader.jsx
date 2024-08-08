import { NavLink, Link } from "react-router-dom";
import logo from "/logo.svg"

export function BaseHeader({btnColour}) {
  return (
    <header className="content-grid">
      <nav className="base-nav">
        <div class="brandmark">
          <NavLink to={"/"} className="brandmark__container--header">
            <img src={logo} className="brandmark__logo" alt="Memobanking Logo" />
            <p  className="brandmark__text">Memobanking</p>
          </NavLink>
        </div>
      
        <div className="button">
          <Link to="/login" className="button--login">Login</Link>
          <Link to="/signup" className={`button--signup ${btnColour}`}>Register</Link>
        </div>
      </nav>
    </header>
  );
}
