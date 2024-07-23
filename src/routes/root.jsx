import { Outlet, NavLink } from "react-router-dom";
import Footer from "./footer";
import { useEffect, useState } from "react";

function Root() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNavBtnClick = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    document.querySelectorAll(".nav-link").forEach((link) => {
      console.log(link.href);
    });

    const navBtn = document.querySelector("#menu-btn");

    navBtn.addEventListener("click", () => {
      const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
      navBtn.setAttribute("aria-expanded", !isExpanded);
    });
  }, []);

  const nav = document.querySelector("nav");
  const navLinks = document.querySelector(".nav-links");

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
          >
            <li role="none">
              <NavLink role="menuitem" to="/" className="nav-link btn">
                Home
              </NavLink>
            </li>
            <li role="none">
              <NavLink role="menuitem" to="/about-me" className="nav-link btn">
                About me
              </NavLink>
            </li>
            <li role="none">
              <NavLink role="menuitem" to="/contact" className="nav-link btn">
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
