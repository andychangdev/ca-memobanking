import { NavLink, Link } from "react-router-dom";
import logo from "../../public/logo.svg"

export function BaseHeader() {
  return (
    <header className="content-grid">
      <nav className="base-header breakout">
        <div class="brandmark">
          <NavLink to={"/"} className="brandmark__container">
            <img src={logo} className="brandmark__logo" alt="Memobanking Logo" />
            <p  className="brandmark__text">Memobanking</p>
          </NavLink>
        </div>
      
        <div className="button">
          <Link to="/login" className="button--login">Login</Link>
          <Link to="/signup" className="button--signup"> Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}
