import { NavLink } from "react-router-dom";
import logo from "/logo.svg";


export function AuthHeader() {
  
  return (
    <header>
      <nav className="auth-nav content-grid">
        <div class="brandmark">
          <NavLink to={"/"} className="brandmark__container--header">
            <img src={logo} className="brandmark__logo" alt="Memobanking Logo"/>
            <p className="brandmark__text">Memobanking</p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
