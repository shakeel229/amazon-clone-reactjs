import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          alt="amazon logo"
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817"
        ></img>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>
    </nav>
  );
}

export default Header;
