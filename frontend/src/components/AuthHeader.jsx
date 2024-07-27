import { NavLink, Link } from "react-router-dom";
import logo from "../../public/logo.svg";

export function AuthHeader() {
  return (
    <header>
      <nav className="auth-header">
        <div class="brandmark">
          <NavLink to={"/"} className="brandmark__container">
            <img src={logo} className="brandmark__logo" alt="Memobanking Logo"/>
            <p className="brandmark__text">Memobanking</p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
