import Dropdown from "./Dropdown";
import App2 from "./exa";
import Logo from "./Images/Logo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <img src={Logo} alt="Logo" width="160" height="100" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-1 mb-lg-0 itemsList">
              <li className="nav-item ">
                <a
                  className="nav-link active me-5"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li className="nav-item  me-5">
                <Dropdown />
              </li>
              <li className="nav-item">
                <a className="nav-link">About</a>
              </li>
            </ul>
            <div className="d-flex">
              <span className="bi bi-search m-3"></span>
              <span>
                <App2 />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
