import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <nav
        className={
          scrolled
            ? "scrolled navbar navbar-expand-lg bg-body-tertiary"
            : "navbar navbar-expand-lg bg-body-tertiary"
        }
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={`nav-link  ${({ isActive }) =>
                    isActive ? "active fw-bolder" : ""}`}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link  ${({ isActive }) =>
                    isActive ? "active fw-bolder" : ""}`}
                  aria-current="page"
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <span className="navbar-text">
        <div className="social-icon">
          <a href="#">
            <img src="" alt="" />
          </a>
          <a href="#">
            <img src="" alt="" />
          </a>
          <a href="#">
            <img src="" alt="" />
          </a>
        </div>
        <button
          className="vvd"
          onClick={() => console.log("conectar")}
        ></button>
      </span>
    </>
  );
};

export default Navbar;
