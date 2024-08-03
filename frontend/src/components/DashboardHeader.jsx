import { NavLink } from "react-router-dom";
import logo from "/logo.svg";
import { MdLogout } from "react-icons/md"

export function DashboardHeader() {
  return (
    <header>
      <nav className="dashboard-nav content-grid">
        <div className="dashboard-nav__container">
          <div class="brandmark">
            <NavLink to={"/"} className="brandmark__container--header">
              <img src={logo} className="brandmark__logo" alt="Memobanking Logo"/>
              <p className="brandmark__text">Memobanking</p>
            </NavLink>
          </div>
          <button className="dashboard-nav__logout-btn">
          <MdLogout className="dashboard-nav__logout-icon"/>
          </button>

        </div>
        
      </nav>
    </header>
  );
}
