import { NavLink, Link } from "react-router-dom";
import logo from "/logo.svg"

export function Footer() {
  return (
    <footer className="content-grid">
        <div class="brandmark">
          <NavLink to={"/"} className="brandmark__container--footer">
            <img src={logo} className="brandmark__logo" alt="Memobanking Logo" />
            <p  className="brandmark__text">Memobanking</p>
          </NavLink>
        </div>
      <nav className="external-pages">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div className="copyright">
        <p>&#169; 2024 MEMOBANKING</p>
      </div>
    </footer>
  );
}
