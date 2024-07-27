import { NavLink, Link } from "react-router-dom";
import logo from "../assets/react.svg";

export function Footer() {
  return (
    <footer className="content-grid">
        <div className="site-name">
      <p>Memobanking</p>
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
