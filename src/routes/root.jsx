import { Outlet, NavLink } from "react-router-dom";
import Footer from "./footer";
import { useEffect } from "react";

function Root() {
  useEffect(() => {
    document.querySelectorAll(".nav-link").forEach((link) => {
      console.log(link.href);
    });
  }, []);

  return (
    <div id="root-component">
      <div id="header">
        <h1>
          <NavLink to="/">Margot Goralczyk</NavLink>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-me" className="nav-link">
                About me
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
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
