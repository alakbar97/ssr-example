import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Logo
        </Link>
        <ul className="right">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admins">Admins</Link>
          </li>
          {auth ? (
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          ) : (
            <li>
              <a href="/api/auth/google">Login</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
