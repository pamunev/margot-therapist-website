import { Outlet, NavLink } from "react-router-dom";
import Footer from "./footer";
import { useEffect, useState, useRef } from "react";

function Root() {
  const [isExpanded, setIsExpanded] = useState(false);
  const menuRef = useRef(null);
  const navBtnRef = useRef(null);

  const handleNavBtnClick = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !navBtnRef.current.contains(event.target)
    ) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div id="root-component">
      <div id="header">
        <h1>
          <NavLink to="/" className="logo">
            Margot Goralczyk, LCSW
          </NavLink>
        </h1>
        <nav>
          <button
            className="btn btn--menu"
            id="menu-btn"
            aria-expanded={isExpanded}
            aria-controls="menu"
            aria-label="Open mobile nav"
            onClick={handleNavBtnClick}
            ref={navBtnRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <ul
            role="menubar"
            className={`nav-links ${isExpanded ? "activated" : ""}`}
            id="menu"
            ref={menuRef}
          >
            <li role="none">
              <NavLink
                role="menuitem"
                to="/"
                className="nav-link btn"
                onClick={() => setIsExpanded(false)}
              >
                Home
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                role="menuitem"
                to="/about-me"
                className="nav-link btn"
                onClick={() => setIsExpanded(false)}
              >
                About me
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                role="menuitem"
                to="/contact"
                className="nav-link btn"
                onClick={() => setIsExpanded(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Root;
