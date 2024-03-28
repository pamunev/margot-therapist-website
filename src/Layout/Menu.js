import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <nav>
        <Link to="/" className="header-link">
          Home
        </Link>
        <Link to="/contact" className="header-link-furthest-right">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Menu;
