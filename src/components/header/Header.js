import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
