import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../pages/routes";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ADD_USER}>Add User</Link>
          </li>
          <li>
            <Link to={ROUTES.USER}>User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
